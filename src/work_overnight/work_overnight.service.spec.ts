import { CreateWorkDto } from './dto/create-work.dto'
import { UpdateQuantityDto } from './dto/update-quantity.dto'
import { UpdateWorkDto } from './dto/update-work.dto'
import { WorkOvernightService } from './work_overnight.service'
import { ConflictException, NotFoundException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { PrismaService } from '@/prisma/prisma.service'

describe('WorkOvernightService', () => {
	let service: WorkOvernightService
	let prisma: PrismaService

	const mockPrismaService = {
		workOvernight: {
			findUnique: jest.fn(),
			findMany: jest.fn(),
			create: jest.fn(),
			update: jest.fn(),
			delete: jest.fn(),
			deleteMany: jest.fn()
		},
		machine_cnc: {
			findUnique: jest.fn()
		}
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				WorkOvernightService,
				{
					provide: PrismaService,
					useValue: mockPrismaService
				}
			]
		}).compile()

		service = module.get<WorkOvernightService>(WorkOvernightService)
		prisma = module.get<PrismaService>(PrismaService)

		// Очистка моков перед каждым тестом
		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	describe('create', () => {
		const createWorkDto: CreateWorkDto = {
			name: 'Test Work',
			rt: 'RT-2025-001',
			quantity: 100,
			madeBy: 'Test User',
			leftToMake: 100,
			productionTime: '45 минут',
			machineId: 1
		}

		const mockMachine = {
			id: 1,
			name: 'Test Machine',
			description: 'Test Description',
			createdAt: new Date(),
			updatedAt: new Date()
		}

		const mockCreatedWork = {
			id: 1,
			...createWorkDto,
			isArchived: false,
			archivedAt: null,
			machine: mockMachine,
			stages: [],
			files: [],
			createdAt: new Date(),
			updatedAt: new Date()
		}

		it('should create a new work successfully', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(null)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)
			mockPrismaService.workOvernight.create.mockResolvedValue(
				mockCreatedWork
			)

			const result = await service.create(createWorkDto)

			expect(result).toEqual(mockCreatedWork)
			expect(prisma.workOvernight.findUnique).toHaveBeenCalledWith({
				where: { rt: createWorkDto.rt }
			})
			expect(prisma.machine_cnc.findUnique).toHaveBeenCalledWith({
				where: { id: createWorkDto.machineId }
			})
			expect(prisma.workOvernight.create).toHaveBeenCalled()
		})

		it('should throw ConflictException if RT already exists', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue({
				id: 1,
				rt: createWorkDto.rt
			})

			await expect(service.create(createWorkDto)).rejects.toThrow(
				ConflictException
			)
			await expect(service.create(createWorkDto)).rejects.toThrow(
				'Работа с таким RT уже существует'
			)
		})

		it('should throw NotFoundException if machine does not exist', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(null)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(null)

			await expect(service.create(createWorkDto)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.create(createWorkDto)).rejects.toThrow(
				'Станок не найден'
			)
		})

		it('should archive work immediately if leftToMake is 0', async () => {
			const completedWorkDto = { ...createWorkDto, leftToMake: 0 }
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(null)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)
			mockPrismaService.workOvernight.create.mockResolvedValue({
				...mockCreatedWork,
				leftToMake: 0,
				isArchived: true,
				archivedAt: new Date()
			})

			const result = await service.create(completedWorkDto)

			expect(result.isArchived).toBe(true)
			expect(result.archivedAt).toBeDefined()
			expect(prisma.workOvernight.create).toHaveBeenCalledWith(
				expect.objectContaining({
					data: expect.objectContaining({
						isArchived: true,
						archivedAt: expect.any(Date)
					})
				})
			)
		})
	})

	describe('findAll', () => {
		const mockWorks = [
			{
				id: 1,
				name: 'Work 1',
				rt: 'RT-001',
				quantity: 100,
				leftToMake: 50,
				isArchived: false,
				machine: { id: 1, name: 'Machine 1' },
				stages: [],
				files: []
			},
			{
				id: 2,
				name: 'Work 2',
				rt: 'RT-002',
				quantity: 200,
				leftToMake: 0,
				isArchived: true,
				machine: { id: 1, name: 'Machine 1' },
				stages: [],
				files: []
			}
		]

		it('should return only active works by default', async () => {
			const activeWorks = mockWorks.filter(w => !w.isArchived)
			mockPrismaService.workOvernight.findMany.mockResolvedValue(
				activeWorks
			)

			const result = await service.findAll()

			expect(result).toEqual(activeWorks)
			expect(prisma.workOvernight.findMany).toHaveBeenCalledWith(
				expect.objectContaining({
					where: { isArchived: false }
				})
			)
		})

		it('should return all works including archived when includeArchived is true', async () => {
			mockPrismaService.workOvernight.findMany.mockResolvedValue(
				mockWorks
			)

			const result = await service.findAll(true)

			expect(result).toEqual(mockWorks)
			expect(prisma.workOvernight.findMany).toHaveBeenCalledWith(
				expect.objectContaining({
					where: {}
				})
			)
		})
	})

	describe('findArchived', () => {
		it('should return only archived works', async () => {
			const archivedWorks = [
				{
					id: 2,
					name: 'Archived Work',
					rt: 'RT-002',
					isArchived: true,
					archivedAt: new Date(),
					machine: {},
					stages: [],
					files: []
				}
			]
			mockPrismaService.workOvernight.findMany.mockResolvedValue(
				archivedWorks
			)

			const result = await service.findArchived()

			expect(result).toEqual(archivedWorks)
			expect(prisma.workOvernight.findMany).toHaveBeenCalledWith(
				expect.objectContaining({
					where: { isArchived: true }
				})
			)
		})
	})

	describe('findOne', () => {
		const mockWork = {
			id: 1,
			name: 'Test Work',
			rt: 'RT-001',
			quantity: 100,
			leftToMake: 50,
			machine: {},
			stages: [],
			files: []
		}

		it('should return work by id', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(
				mockWork
			)

			const result = await service.findOne(1)

			expect(result).toEqual(mockWork)
			expect(prisma.workOvernight.findUnique).toHaveBeenCalledWith({
				where: { id: 1 },
				include: expect.any(Object)
			})
		})

		it('should throw NotFoundException if work not found', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(null)

			await expect(service.findOne(999)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.findOne(999)).rejects.toThrow(
				'Работа не найдена'
			)
		})
	})

	describe('findByRt', () => {
		const mockWork = {
			id: 1,
			name: 'Test Work',
			rt: 'RT-001',
			quantity: 100,
			leftToMake: 50,
			machine: {},
			stages: [],
			files: []
		}

		it('should return work by RT number', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(
				mockWork
			)

			const result = await service.findByRt('RT-001')

			expect(result).toEqual(mockWork)
			expect(prisma.workOvernight.findUnique).toHaveBeenCalledWith({
				where: { rt: 'RT-001' },
				include: expect.any(Object)
			})
		})

		it('should throw NotFoundException if work with RT not found', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(null)

			await expect(service.findByRt('RT-999')).rejects.toThrow(
				NotFoundException
			)
			await expect(service.findByRt('RT-999')).rejects.toThrow(
				'Работа с таким RT не найдена'
			)
		})
	})

	describe('update', () => {
		const mockExistingWork = {
			id: 1,
			name: 'Old Work',
			rt: 'RT-001',
			quantity: 100,
			leftToMake: 50,
			machineId: 1,
			machine: {},
			stages: [],
			files: []
		}

		const updateWorkDto: UpdateWorkDto = {
			name: 'Updated Work',
			leftToMake: 30
		}

		it('should update work successfully', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(
				mockExistingWork
			)
			mockPrismaService.workOvernight.update.mockResolvedValue({
				...mockExistingWork,
				...updateWorkDto
			})

			const result = await service.update(1, updateWorkDto)

			expect(result.name).toBe(updateWorkDto.name)
			expect(result.leftToMake).toBe(updateWorkDto.leftToMake)
			expect(prisma.workOvernight.update).toHaveBeenCalled()
		})

		it('should archive work when leftToMake is updated to 0', async () => {
			const completeDto: UpdateWorkDto = { leftToMake: 0 }
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(
				mockExistingWork
			)
			mockPrismaService.workOvernight.update.mockResolvedValue({
				...mockExistingWork,
				leftToMake: 0,
				isArchived: true,
				archivedAt: new Date()
			})

			await service.update(1, completeDto)

			expect(prisma.workOvernight.update).toHaveBeenCalledWith(
				expect.objectContaining({
					data: expect.objectContaining({
						isArchived: true,
						archivedAt: expect.any(Date)
					})
				})
			)
		})

		it('should throw ConflictException if new RT already exists', async () => {
			const updateDto: UpdateWorkDto = { rt: 'RT-002' }
			mockPrismaService.workOvernight.findUnique
				.mockResolvedValueOnce(mockExistingWork) // первый вызов - проверка существования работы
				.mockResolvedValueOnce({ id: 2, rt: 'RT-002' }) // второй вызов - проверка RT

			await expect(service.update(1, updateDto)).rejects.toThrow(
				ConflictException
			)
		})

		it('should throw NotFoundException if machine does not exist', async () => {
			const updateDto: UpdateWorkDto = { machineId: 999 }
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(
				mockExistingWork
			)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(null)

			await expect(service.update(1, updateDto)).rejects.toThrow(
				NotFoundException
			)
		})
	})

	describe('updateQuantityByRt', () => {
		const mockWork = {
			id: 1,
			rt: 'RT-001',
			quantity: 100,
			leftToMake: 50,
			machine: {},
			stages: []
		}

		it('should update quantity by RT successfully', async () => {
			const updateDto: UpdateQuantityDto = {
				rt: 'RT-001',
				leftToMake: 30
			}
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(
				mockWork
			)
			mockPrismaService.workOvernight.update.mockResolvedValue({
				...mockWork,
				leftToMake: 30
			})

			const result = await service.updateQuantityByRt(updateDto)

			expect(result.leftToMake).toBe(30)
			expect(prisma.workOvernight.update).toHaveBeenCalledWith({
				where: { rt: 'RT-001' },
				data: {
					leftToMake: 30,
					isArchived: false,
					archivedAt: null
				},
				include: expect.any(Object)
			})
		})

		it('should archive work when leftToMake is updated to 0', async () => {
			const updateDto: UpdateQuantityDto = {
				rt: 'RT-001',
				leftToMake: 0
			}
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(
				mockWork
			)
			mockPrismaService.workOvernight.update.mockResolvedValue({
				...mockWork,
				leftToMake: 0,
				isArchived: true,
				archivedAt: new Date()
			})

			await service.updateQuantityByRt(updateDto)

			expect(prisma.workOvernight.update).toHaveBeenCalledWith({
				where: { rt: 'RT-001' },
				data: {
					leftToMake: 0,
					isArchived: true,
					archivedAt: expect.any(Date)
				},
				include: expect.any(Object)
			})
		})

		it('should throw NotFoundException if work with RT not found', async () => {
			const updateDto: UpdateQuantityDto = {
				rt: 'RT-999',
				leftToMake: 30
			}
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(null)

			await expect(service.updateQuantityByRt(updateDto)).rejects.toThrow(
				NotFoundException
			)
		})
	})

	describe('remove', () => {
		const mockWork = {
			id: 1,
			rt: 'RT-001',
			machine: {},
			stages: [],
			files: []
		}

		it('should delete work successfully', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(
				mockWork
			)
			mockPrismaService.workOvernight.delete.mockResolvedValue(mockWork)

			const result = await service.remove(1)

			expect(result).toEqual({ message: 'Работа успешно удалена' })
			expect(prisma.workOvernight.delete).toHaveBeenCalledWith({
				where: { id: 1 }
			})
		})

		it('should throw NotFoundException if work does not exist', async () => {
			mockPrismaService.workOvernight.findUnique.mockResolvedValue(null)

			await expect(service.remove(999)).rejects.toThrow(NotFoundException)
		})
	})

	describe('cleanupArchivedWorks', () => {
		it('should delete archived works older than 7 days', async () => {
			const deleteResult = { count: 3 }
			mockPrismaService.workOvernight.deleteMany.mockResolvedValue(
				deleteResult
			)

			const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

			const result = await service.cleanupArchivedWorks()

			expect(result).toEqual(deleteResult)
			expect(prisma.workOvernight.deleteMany).toHaveBeenCalledWith({
				where: {
					isArchived: true,
					archivedAt: {
						lte: expect.any(Date)
					}
				}
			})
			expect(consoleSpy).toHaveBeenCalledWith(
				'[Cleanup] Удалено 3 архивных работ старше 7 дней'
			)

			consoleSpy.mockRestore()
		})

		it('should calculate correct date for 7 days ago', async () => {
			mockPrismaService.workOvernight.deleteMany.mockResolvedValue({
				count: 0
			})

			await service.cleanupArchivedWorks()

			const callArgs =
				mockPrismaService.workOvernight.deleteMany.mock.calls[0][0]
			const sevenDaysAgo = callArgs.where.archivedAt.lte as Date
			const today = new Date()
			const daysDifference = Math.floor(
				(today.getTime() - sevenDaysAgo.getTime()) /
					(1000 * 60 * 60 * 24)
			)

			expect(daysDifference).toBe(7)
		})
	})
})
