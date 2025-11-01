import { CreateMachineDto } from './dto/create-machine.dto'
import { UpdateMachineDto } from './dto/update-machine.dto'
import { MachineCncService } from './machine_cnc.service'
import { ConflictException, NotFoundException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { FileType } from '__generated__'
import { FilesService } from '@/files/files.service'
import { PrismaService } from '@/prisma/prisma.service'

describe('MachineCncService', () => {
	let service: MachineCncService
	let prismaService: PrismaService
	let filesService: FilesService

	const mockPrismaService = {
		machine_cnc: {
			findFirst: jest.fn(),
			create: jest.fn(),
			findMany: jest.fn(),
			findUnique: jest.fn(),
			update: jest.fn(),
			delete: jest.fn()
		},
		fileUpload: {
			findUnique: jest.fn()
		}
	}

	const mockFilesService = {
		uploadFile: jest.fn(),
		deleteFile: jest.fn()
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				MachineCncService,
				{
					provide: PrismaService,
					useValue: mockPrismaService
				},
				{
					provide: FilesService,
					useValue: mockFilesService
				}
			]
		}).compile()

		service = module.get<MachineCncService>(MachineCncService)
		prismaService = module.get<PrismaService>(PrismaService)
		filesService = module.get<FilesService>(FilesService)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	describe('create', () => {
		const createMachineDto: CreateMachineDto = {
			name: 'CNC Machine 1',
			description: 'Test machine description'
		}

		const mockMachine = {
			id: 1,
			name: 'CNC Machine 1',
			description: 'Test machine description',
			createdAt: new Date(),
			updatedAt: new Date()
		}

		const mockMachineWithFiles = {
			...mockMachine,
			files: [
				{
					id: 1,
					filename: 'machine-photo.jpg',
					path: 'uploads/machines/machine-photo.jpg',
					mimetype: 'image/jpeg',
					size: 1024,
					type: FileType.IMAGE,
					machineId: 1,
					createdAt: new Date()
				}
			]
		}

		it('should create a new machine successfully without files', async () => {
			mockPrismaService.machine_cnc.findFirst.mockResolvedValue(null)
			mockPrismaService.machine_cnc.create.mockResolvedValue(mockMachine)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachineWithFiles
			)

			const result = await service.create(createMachineDto)

			expect(prismaService.machine_cnc.findFirst).toHaveBeenCalledWith({
				where: { name: createMachineDto.name }
			})
			expect(prismaService.machine_cnc.create).toHaveBeenCalledWith({
				data: {
					name: createMachineDto.name,
					description: createMachineDto.description
				}
			})
			expect(prismaService.machine_cnc.findUnique).toHaveBeenCalledWith({
				where: { id: mockMachine.id },
				include: {
					files: true
				}
			})
			expect(result).toEqual(mockMachineWithFiles)
		})

		it('should create a new machine with files', async () => {
			const mockFiles = [
				{
					fieldname: 'files',
					originalname: 'machine1.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					size: 1024,
					buffer: Buffer.from('test'),
					destination: 'uploads',
					filename: 'machine1.jpg',
					path: 'uploads/machine1.jpg'
				} as Express.Multer.File
			]

			mockPrismaService.machine_cnc.findFirst.mockResolvedValue(null)
			mockPrismaService.machine_cnc.create.mockResolvedValue(mockMachine)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachineWithFiles
			)
			mockFilesService.uploadFile.mockResolvedValue({
				id: 1,
				filename: 'machine-photo.jpg'
			})

			const result = await service.create(createMachineDto, mockFiles)

			expect(prismaService.machine_cnc.create).toHaveBeenCalled()
			expect(mockFilesService.uploadFile).toHaveBeenCalledWith(
				mockFiles[0],
				{
					type: FileType.IMAGE,
					machineId: mockMachine.id
				}
			)
			expect(result).toEqual(mockMachineWithFiles)
		})

		it('should throw ConflictException if machine name already exists', async () => {
			mockPrismaService.machine_cnc.findFirst.mockResolvedValue(
				mockMachine
			)

			await expect(service.create(createMachineDto)).rejects.toThrow(
				ConflictException
			)
			await expect(service.create(createMachineDto)).rejects.toThrow(
				'Станок с таким именем уже существует'
			)

			expect(prismaService.machine_cnc.findFirst).toHaveBeenCalledWith({
				where: { name: createMachineDto.name }
			})
			expect(prismaService.machine_cnc.create).not.toHaveBeenCalled()
		})
	})

	describe('findAll', () => {
		it('should return all machines with files and work overnights', async () => {
			const mockMachines = [
				{
					id: 1,
					name: 'CNC Machine 1',
					description: 'Machine 1',
					createdAt: new Date('2025-01-01'),
					updatedAt: new Date('2025-01-01'),
					files: [],
					workOvernights: [
						{
							id: 1,
							RT: 'RT001',
							stages: []
						}
					]
				},
				{
					id: 2,
					name: 'CNC Machine 2',
					description: 'Machine 2',
					createdAt: new Date('2025-01-02'),
					updatedAt: new Date('2025-01-02'),
					files: [{ id: 1, filename: 'photo.jpg' }],
					workOvernights: []
				}
			]

			mockPrismaService.machine_cnc.findMany.mockResolvedValue(
				mockMachines
			)

			const result = await service.findAll()

			expect(prismaService.machine_cnc.findMany).toHaveBeenCalledWith({
				include: {
					files: true,
					workOvernights: {
						include: {
							stages: true
						}
					}
				},
				orderBy: {
					createdAt: 'desc'
				}
			})
			expect(result).toEqual(mockMachines)
			expect(result).toHaveLength(2)
		})

		it('should return empty array if no machines exist', async () => {
			mockPrismaService.machine_cnc.findMany.mockResolvedValue([])

			const result = await service.findAll()

			expect(result).toEqual([])
		})
	})

	describe('findOne', () => {
		const mockMachine = {
			id: 1,
			name: 'CNC Machine 1',
			description: 'Test machine',
			createdAt: new Date(),
			updatedAt: new Date(),
			files: [
				{
					id: 1,
					filename: 'photo.jpg',
					path: 'uploads/photo.jpg',
					mimetype: 'image/jpeg',
					size: 1024
				}
			],
			workOvernights: [
				{
					id: 1,
					RT: 'RT001',
					stages: [
						{
							id: 1,
							stepNumber: 1,
							description: 'Step 1',
							files: []
						}
					]
				}
			]
		}

		it('should return machine by id with files and work overnights', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)

			const result = await service.findOne(1)

			expect(prismaService.machine_cnc.findUnique).toHaveBeenCalledWith({
				where: { id: 1 },
				include: {
					files: true,
					workOvernights: {
						include: {
							stages: {
								include: {
									files: true
								},
								orderBy: {
									stepNumber: 'asc'
								}
							}
						}
					}
				}
			})
			expect(result).toEqual(mockMachine)
		})

		it('should throw NotFoundException if machine does not exist', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(null)

			await expect(service.findOne(999)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.findOne(999)).rejects.toThrow(
				'Станок не найден'
			)

			expect(prismaService.machine_cnc.findUnique).toHaveBeenCalledWith({
				where: { id: 999 },
				include: {
					files: true,
					workOvernights: {
						include: {
							stages: {
								include: {
									files: true
								},
								orderBy: {
									stepNumber: 'asc'
								}
							}
						}
					}
				}
			})
		})
	})

	describe('update', () => {
		const updateMachineDto: UpdateMachineDto = {
			name: 'Updated Machine',
			description: 'Updated description'
		}

		const mockMachine = {
			id: 1,
			name: 'CNC Machine 1',
			description: 'Original description',
			createdAt: new Date(),
			updatedAt: new Date()
		}

		const mockUpdatedMachine = {
			...mockMachine,
			name: 'Updated Machine',
			description: 'Updated description',
			files: [],
			workOvernights: []
		}

		it('should update machine successfully without files', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)
			mockPrismaService.machine_cnc.findFirst.mockResolvedValue(null)
			mockPrismaService.machine_cnc.update.mockResolvedValue(
				mockUpdatedMachine
			)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValueOnce(
				mockMachine
			)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValueOnce(
				mockUpdatedMachine
			)

			const result = await service.update(1, updateMachineDto)

			expect(prismaService.machine_cnc.findFirst).toHaveBeenCalledWith({
				where: {
					name: updateMachineDto.name,
					NOT: { id: 1 }
				}
			})
			expect(prismaService.machine_cnc.update).toHaveBeenCalledWith({
				where: { id: 1 },
				data: {
					name: updateMachineDto.name,
					description: updateMachineDto.description
				}
			})
			expect(result).toEqual(mockUpdatedMachine)
		})

		it('should update machine with new files', async () => {
			const mockFiles = [
				{
					fieldname: 'files',
					originalname: 'new-photo.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					size: 2048,
					buffer: Buffer.from('test'),
					destination: 'uploads',
					filename: 'new-photo.jpg',
					path: 'uploads/new-photo.jpg'
				} as Express.Multer.File
			]

			mockPrismaService.machine_cnc.findUnique.mockResolvedValueOnce(
				mockMachine
			)
			mockPrismaService.machine_cnc.findFirst.mockResolvedValue(null)
			mockPrismaService.machine_cnc.update.mockResolvedValue(
				mockUpdatedMachine
			)
			mockPrismaService.machine_cnc.findUnique.mockResolvedValueOnce(
				mockUpdatedMachine
			)
			mockFilesService.uploadFile.mockResolvedValue({
				id: 2,
				filename: 'new-photo.jpg'
			})

			const result = await service.update(1, updateMachineDto, mockFiles)

			expect(mockFilesService.uploadFile).toHaveBeenCalledWith(
				mockFiles[0],
				{
					type: FileType.IMAGE,
					machineId: 1
				}
			)
			expect(result).toEqual(mockUpdatedMachine)
		})

		it('should throw ConflictException if new name already exists', async () => {
			const existingMachine = {
				id: 2,
				name: 'Updated Machine',
				description: 'Another machine',
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)
			mockPrismaService.machine_cnc.findFirst.mockResolvedValue(
				existingMachine
			)

			await expect(service.update(1, updateMachineDto)).rejects.toThrow(
				ConflictException
			)
			await expect(service.update(1, updateMachineDto)).rejects.toThrow(
				'Станок с таким именем уже существует'
			)

			expect(prismaService.machine_cnc.update).not.toHaveBeenCalled()
		})

		it('should throw NotFoundException if machine does not exist', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(null)

			await expect(service.update(999, updateMachineDto)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.update(999, updateMachineDto)).rejects.toThrow(
				'Станок не найден'
			)

			expect(prismaService.machine_cnc.update).not.toHaveBeenCalled()
		})
	})

	describe('remove', () => {
		const mockMachine = {
			id: 1,
			name: 'CNC Machine 1',
			description: 'Test machine',
			createdAt: new Date(),
			updatedAt: new Date(),
			files: [],
			workOvernights: []
		}

		it('should delete machine successfully', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)
			mockPrismaService.machine_cnc.delete.mockResolvedValue(mockMachine)

			const result = await service.remove(1)

			expect(prismaService.machine_cnc.findUnique).toHaveBeenCalled()
			expect(prismaService.machine_cnc.delete).toHaveBeenCalledWith({
				where: { id: 1 }
			})
			expect(result).toEqual({ message: 'Станок успешно удален' })
		})

		it('should throw NotFoundException if machine does not exist', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(null)

			await expect(service.remove(999)).rejects.toThrow(NotFoundException)
			await expect(service.remove(999)).rejects.toThrow(
				'Станок не найден'
			)

			expect(prismaService.machine_cnc.delete).not.toHaveBeenCalled()
		})
	})

	describe('removeFile', () => {
		const mockMachine = {
			id: 1,
			name: 'CNC Machine 1',
			description: 'Test machine',
			createdAt: new Date(),
			updatedAt: new Date(),
			files: [],
			workOvernights: []
		}

		const mockFile = {
			id: 1,
			filename: 'photo.jpg',
			path: 'uploads/photo.jpg',
			mimetype: 'image/jpeg',
			size: 1024,
			type: FileType.IMAGE,
			machineId: 1,
			toolId: null,
			workId: null,
			stageId: null,
			createdAt: new Date()
		}

		it('should remove file successfully', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(mockFile)
			mockFilesService.deleteFile.mockResolvedValue({
				message: 'Файл успешно удален'
			})

			const result = await service.removeFile(1, 1)

			expect(prismaService.machine_cnc.findUnique).toHaveBeenCalled()
			expect(prismaService.fileUpload.findUnique).toHaveBeenCalledWith({
				where: { id: 1 }
			})
			expect(mockFilesService.deleteFile).toHaveBeenCalledWith(1)
			expect(result).toEqual({ message: 'Файл успешно удален' })
		})

		it('should throw NotFoundException if machine does not exist', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(null)

			await expect(service.removeFile(999, 1)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.removeFile(999, 1)).rejects.toThrow(
				'Станок не найден'
			)

			expect(mockFilesService.deleteFile).not.toHaveBeenCalled()
		})

		it('should throw NotFoundException if file does not exist', async () => {
			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(null)

			await expect(service.removeFile(1, 999)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.removeFile(1, 999)).rejects.toThrow(
				'Файл не найден или не принадлежит этому станку'
			)

			expect(mockFilesService.deleteFile).not.toHaveBeenCalled()
		})

		it('should throw NotFoundException if file does not belong to machine', async () => {
			const wrongMachineFile = {
				...mockFile,
				machineId: 2
			}

			mockPrismaService.machine_cnc.findUnique.mockResolvedValue(
				mockMachine
			)
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(
				wrongMachineFile
			)

			await expect(service.removeFile(1, 1)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.removeFile(1, 1)).rejects.toThrow(
				'Файл не найден или не принадлежит этому станку'
			)

			expect(mockFilesService.deleteFile).not.toHaveBeenCalled()
		})
	})
})
