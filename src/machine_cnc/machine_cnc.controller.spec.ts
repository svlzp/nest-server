import { CreateMachineDto } from './dto/create-machine.dto'
import { UpdateMachineDto } from './dto/update-machine.dto'
import { MachineCncController } from './machine_cnc.controller'
import { MachineCncService } from './machine_cnc.service'
import { Test, TestingModule } from '@nestjs/testing'
import { AuthGuard } from '@/auth/guards/auth.guard'
import { JwtAuthGuard } from '@/auth/guards/jwt.guard'

describe('MachineCncController', () => {
	let controller: MachineCncController
	let service: MachineCncService

	const mockAuthGuard = {
		canActivate: jest.fn(() => true)
	}

	const mockMachineCncService = {
		create: jest.fn(),
		findAll: jest.fn(),
		findOne: jest.fn(),
		update: jest.fn(),
		remove: jest.fn(),
		removeFile: jest.fn()
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [MachineCncController],
			providers: [
				{
					provide: MachineCncService,
					useValue: mockMachineCncService
				}
			]
		})
			.overrideGuard(AuthGuard)
			.useValue(mockAuthGuard)
			.overrideGuard(JwtAuthGuard)
			.useValue(mockAuthGuard)
			.compile()

		controller = module.get<MachineCncController>(MachineCncController)
		service = module.get<MachineCncService>(MachineCncService)

		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})

	describe('create', () => {
		const createMachineDto: CreateMachineDto = {
			name: 'DMG MORI CMX 50U',
			description: '5-осевой обрабатывающий центр'
		}

		const mockResult = {
			id: 1,
			name: 'DMG MORI CMX 50U',
			description: '5-осевой обрабатывающий центр',
			files: [],
			workOvernights: [],
			createdAt: new Date(),
			updatedAt: new Date()
		}

		it('should create a machine without files', async () => {
			mockMachineCncService.create.mockResolvedValue(mockResult)

			const result = await controller.create(createMachineDto, undefined)

			expect(service.create).toHaveBeenCalledWith(
				createMachineDto,
				undefined
			)
			expect(result).toEqual(mockResult)
		})

		it('should create a machine with files', async () => {
			const mockFiles = [
				{
					fieldname: 'files',
					originalname: 'machine.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					buffer: Buffer.from('test'),
					size: 1024
				}
			] as Express.Multer.File[]

			const resultWithFiles = {
				...mockResult,
				files: [
					{
						id: 1,
						originalName: 'machine.jpg',
						fileName: 'unique-machine.jpg',
						mimetype: 'image/jpeg',
						size: 1024,
						path: '/uploads/machines/unique-machine.jpg',
						type: 'IMAGE',
						machineId: 1,
						createdAt: new Date()
					}
				]
			}

			mockMachineCncService.create.mockResolvedValue(resultWithFiles)

			const result = await controller.create(createMachineDto, mockFiles)

			expect(service.create).toHaveBeenCalledWith(
				createMachineDto,
				mockFiles
			)
			expect(result).toEqual(resultWithFiles)
			expect(result?.files?.length).toBe(1)
		})

		it('should throw ConflictException if machine with same name exists', async () => {
			mockMachineCncService.create.mockRejectedValue(
				new Error('Станок с таким именем уже существует')
			)

			await expect(
				controller.create(createMachineDto, undefined)
			).rejects.toThrow('Станок с таким именем уже существует')
		})
	})

	describe('findAll', () => {
		it('should return an array of machines', async () => {
			const mockMachines = [
				{
					id: 1,
					name: 'DMG MORI CMX 50U',
					description: '5-осевой обрабатывающий центр',
					files: [],
					workOvernights: [],
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					id: 2,
					name: 'Haas VF-2',
					description: 'Вертикальный фрезерный станок',
					files: [],
					workOvernights: [],
					createdAt: new Date(),
					updatedAt: new Date()
				}
			]

			mockMachineCncService.findAll.mockResolvedValue(mockMachines)

			const result = await controller.findAll()

			expect(service.findAll).toHaveBeenCalled()
			expect(result).toEqual(mockMachines)
			expect(result.length).toBe(2)
		})

		it('should return empty array if no machines found', async () => {
			mockMachineCncService.findAll.mockResolvedValue([])

			const result = await controller.findAll()

			expect(service.findAll).toHaveBeenCalled()
			expect(result).toEqual([])
		})
	})

	describe('findOne', () => {
		const mockMachine = {
			id: 1,
			name: 'DMG MORI CMX 50U',
			description: '5-осевой обрабатывающий центр',
			files: [
				{
					id: 1,
					originalName: 'machine.jpg',
					fileName: 'unique-machine.jpg',
					mimetype: 'image/jpeg',
					size: 1024,
					path: '/uploads/machines/unique-machine.jpg',
					type: 'IMAGE',
					machineId: 1,
					createdAt: new Date()
				}
			],
			workOvernights: [],
			createdAt: new Date(),
			updatedAt: new Date()
		}

		it('should return a machine by id', async () => {
			mockMachineCncService.findOne.mockResolvedValue(mockMachine)

			const result = await controller.findOne(1)

			expect(service.findOne).toHaveBeenCalledWith(1)
			expect(result).toEqual(mockMachine)
		})

		it('should throw NotFoundException if machine not found', async () => {
			mockMachineCncService.findOne.mockRejectedValue(
				new Error('Станок с id 999 не найден')
			)

			await expect(controller.findOne(999)).rejects.toThrow(
				'Станок с id 999 не найден'
			)
		})

		it('should include files in the response', async () => {
			mockMachineCncService.findOne.mockResolvedValue(mockMachine)

			const result = await controller.findOne(1)

			expect(result.files).toBeDefined()
			expect(result.files.length).toBe(1)
			expect(result.files[0].originalName).toBe('machine.jpg')
		})
	})

	describe('update', () => {
		const updateMachineDto: UpdateMachineDto = {
			name: 'DMG MORI CMX 60U',
			description: 'Обновленная версия 5-осевого станка'
		}

		const mockUpdatedMachine = {
			id: 1,
			name: 'DMG MORI CMX 60U',
			description: 'Обновленная версия 5-осевого станка',
			files: [],
			workOvernights: [],
			createdAt: new Date(),
			updatedAt: new Date()
		}

		it('should update a machine without files', async () => {
			mockMachineCncService.update.mockResolvedValue(mockUpdatedMachine)

			const result = await controller.update(
				1,
				updateMachineDto,
				undefined
			)

			expect(service.update).toHaveBeenCalledWith(
				1,
				updateMachineDto,
				undefined
			)
			expect(result).toEqual(mockUpdatedMachine)
		})

		it('should update a machine with files', async () => {
			const mockFiles = [
				{
					fieldname: 'files',
					originalname: 'updated-machine.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					buffer: Buffer.from('test'),
					size: 2048
				}
			] as Express.Multer.File[]

			const resultWithFiles = {
				...mockUpdatedMachine,
				files: [
					{
						id: 2,
						originalName: 'updated-machine.jpg',
						fileName: 'unique-updated-machine.jpg',
						mimetype: 'image/jpeg',
						size: 2048,
						path: '/uploads/machines/unique-updated-machine.jpg',
						type: 'IMAGE',
						machineId: 1,
						createdAt: new Date()
					}
				]
			}

			mockMachineCncService.update.mockResolvedValue(resultWithFiles)

			const result = await controller.update(
				1,
				updateMachineDto,
				mockFiles
			)

			expect(service.update).toHaveBeenCalledWith(
				1,
				updateMachineDto,
				mockFiles
			)
			expect(result).toEqual(resultWithFiles)
			expect(result?.files?.length).toBe(1)
		})

		it('should throw NotFoundException if machine not found', async () => {
			mockMachineCncService.update.mockRejectedValue(
				new Error('Станок с id 999 не найден')
			)

			await expect(
				controller.update(999, updateMachineDto, undefined)
			).rejects.toThrow('Станок с id 999 не найден')
		})

		it('should update only name', async () => {
			const partialUpdate: UpdateMachineDto = {
				name: 'New Machine Name'
			}

			const partialResult = {
				...mockUpdatedMachine,
				name: 'New Machine Name'
			}

			mockMachineCncService.update.mockResolvedValue(partialResult)

			const result = await controller.update(1, partialUpdate, undefined)

			expect(service.update).toHaveBeenCalledWith(
				1,
				partialUpdate,
				undefined
			)
			expect(result?.name).toBe('New Machine Name')
		})
	})

	describe('remove', () => {
		it('should remove a machine', async () => {
			const mockDeletedMachine = {
				id: 1,
				name: 'DMG MORI CMX 50U',
				description: '5-осевой обрабатывающий центр',
				files: [],
				workOvernights: [],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockMachineCncService.remove.mockResolvedValue(mockDeletedMachine)

			const result = await controller.remove(1)

			expect(service.remove).toHaveBeenCalledWith(1)
			expect(result).toEqual(mockDeletedMachine)
		})

		it('should throw NotFoundException if machine not found', async () => {
			mockMachineCncService.remove.mockRejectedValue(
				new Error('Станок с id 999 не найден')
			)

			await expect(controller.remove(999)).rejects.toThrow(
				'Станок с id 999 не найден'
			)
		})
	})

	describe('removeFile', () => {
		it('should remove a file from machine', async () => {
			const mockDeletedFile = {
				id: 1,
				originalName: 'machine.jpg',
				fileName: 'unique-machine.jpg',
				mimetype: 'image/jpeg',
				size: 1024,
				path: '/uploads/machines/unique-machine.jpg',
				type: 'IMAGE',
				machineId: 1,
				createdAt: new Date()
			}

			mockMachineCncService.removeFile.mockResolvedValue(mockDeletedFile)

			const result = await controller.removeFile(1, 1)

			expect(service.removeFile).toHaveBeenCalledWith(1, 1)
			expect(result).toEqual(mockDeletedFile)
		})

		it('should throw NotFoundException if machine not found', async () => {
			mockMachineCncService.removeFile.mockRejectedValue(
				new Error('Станок с id 999 не найден')
			)

			await expect(controller.removeFile(999, 1)).rejects.toThrow(
				'Станок с id 999 не найден'
			)
		})

		it('should throw NotFoundException if file not found', async () => {
			mockMachineCncService.removeFile.mockRejectedValue(
				new Error('Файл с id 999 не найден у станка 1')
			)

			await expect(controller.removeFile(1, 999)).rejects.toThrow(
				'Файл с id 999 не найден у станка 1'
			)
		})
	})

	describe('file upload validation', () => {
		const createMachineDto: CreateMachineDto = {
			name: 'Test Machine',
			description: 'Test Description'
		}

		it('should accept valid image files', async () => {
			const validImageFiles = [
				{
					fieldname: 'files',
					originalname: 'image.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					buffer: Buffer.from('test'),
					size: 1024
				},
				{
					fieldname: 'files',
					originalname: 'image.png',
					encoding: '7bit',
					mimetype: 'image/png',
					buffer: Buffer.from('test'),
					size: 2048
				}
			] as Express.Multer.File[]

			const mockResult = {
				id: 1,
				name: 'Test Machine',
				description: 'Test Description',
				files: [
					{
						id: 1,
						originalName: 'image.jpg',
						fileName: 'unique-image.jpg',
						mimetype: 'image/jpeg',
						size: 1024,
						path: '/uploads/machines/unique-image.jpg',
						type: 'IMAGE',
						machineId: 1,
						createdAt: new Date()
					},
					{
						id: 2,
						originalName: 'image.png',
						fileName: 'unique-image.png',
						mimetype: 'image/png',
						size: 2048,
						path: '/uploads/machines/unique-image.png',
						type: 'IMAGE',
						machineId: 1,
						createdAt: new Date()
					}
				],
				workOvernights: [],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockMachineCncService.create.mockResolvedValue(mockResult)

			const result = await controller.create(
				createMachineDto,
				validImageFiles
			)

			expect(service.create).toHaveBeenCalledWith(
				createMachineDto,
				validImageFiles
			)
			expect(result?.files?.length).toBe(2)
		})

		it('should handle empty files array', async () => {
			const mockResult = {
				id: 1,
				name: 'Test Machine',
				description: 'Test Description',
				files: [],
				workOvernights: [],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockMachineCncService.create.mockResolvedValue(mockResult)

			const result = await controller.create(createMachineDto, [])

			expect(service.create).toHaveBeenCalledWith(createMachineDto, [])
			expect(result?.files?.length).toBe(0)
		})
	})

	describe('edge cases', () => {
		it('should handle machines with no description', async () => {
			const createDto: CreateMachineDto = {
				name: 'Simple Machine'
			}

			const mockResult = {
				id: 1,
				name: 'Simple Machine',
				description: null,
				files: [],
				workOvernights: [],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockMachineCncService.create.mockResolvedValue(mockResult)

			const result = await controller.create(createDto, undefined)

			expect(service.create).toHaveBeenCalledWith(createDto, undefined)
			expect(result?.description).toBeNull()
		})

		it('should handle machines with very long names', async () => {
			const longName = 'A'.repeat(255)
			const createDto: CreateMachineDto = {
				name: longName,
				description: 'Test'
			}

			const mockResult = {
				id: 1,
				name: longName,
				description: 'Test',
				files: [],
				workOvernights: [],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockMachineCncService.create.mockResolvedValue(mockResult)

			const result = await controller.create(createDto, undefined)

			expect(service.create).toHaveBeenCalledWith(createDto, undefined)
			expect(result?.name?.length).toBe(255)
		})

		it('should handle multiple file uploads', async () => {
			const multipleFiles = Array.from({ length: 5 }, (_, i) => ({
				fieldname: 'files',
				originalname: `image${i}.jpg`,
				encoding: '7bit',
				mimetype: 'image/jpeg',
				buffer: Buffer.from('test'),
				size: 1024 * (i + 1)
			})) as Express.Multer.File[]

			const mockResult = {
				id: 1,
				name: 'Test Machine',
				description: 'Test',
				files: multipleFiles.map((file, i) => ({
					id: i + 1,
					originalName: file.originalname,
					fileName: `unique-${file.originalname}`,
					mimetype: file.mimetype,
					size: file.size,
					path: `/uploads/machines/unique-${file.originalname}`,
					type: 'IMAGE',
					machineId: 1,
					createdAt: new Date()
				})),
				workOvernights: [],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockMachineCncService.create.mockResolvedValue(mockResult)

			const result = await controller.create(
				{ name: 'Test Machine', description: 'Test' },
				multipleFiles
			)

			expect(result?.files?.length).toBe(5)
		})
	})
})
