import { UploadFileDto } from './dto/upload-file.dto'
import { FilesService } from './files.service'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { FileType } from '__generated__'
import * as fs from 'fs'
import * as path from 'path'
import { PrismaService } from '@/prisma/prisma.service'

jest.mock('fs')

describe('FilesService', () => {
	let service: FilesService
	let prismaService: PrismaService
	let configService: ConfigService

	const mockPrismaService = {
		fileUpload: {
			create: jest.fn(),
			findUnique: jest.fn(),
			findMany: jest.fn(),
			delete: jest.fn()
		}
	}

	const mockConfigService = {
		get: jest.fn()
	}

	beforeEach(async () => {
		jest.clearAllMocks()
		;(fs.existsSync as jest.Mock).mockReturnValue(true)
		;(fs.mkdirSync as jest.Mock).mockReturnValue(undefined)
		;(fs.unlinkSync as jest.Mock).mockReturnValue(undefined)

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				FilesService,
				{
					provide: PrismaService,
					useValue: mockPrismaService
				},
				{
					provide: ConfigService,
					useValue: mockConfigService
				}
			]
		}).compile()

		service = module.get<FilesService>(FilesService)
		prismaService = module.get<PrismaService>(PrismaService)
		configService = module.get<ConfigService>(ConfigService)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	describe('constructor and initialization', () => {
		it('should create upload directory if it does not exist', () => {
			;(fs.existsSync as jest.Mock).mockReturnValue(false)

			new FilesService(prismaService, configService)

			expect(fs.mkdirSync).toHaveBeenCalledWith(
				path.join(process.cwd(), 'uploads'),
				{ recursive: true }
			)
		})

		it('should not create upload directory if it already exists', () => {
			;(fs.existsSync as jest.Mock).mockReturnValue(true)
			;(fs.mkdirSync as jest.Mock).mockClear()

			new FilesService(prismaService, configService)

			expect(fs.mkdirSync).not.toHaveBeenCalled()
		})
	})

	describe('uploadFile', () => {
		const mockFile: Express.Multer.File = {
			fieldname: 'file',
			originalname: 'test-image.jpg',
			encoding: '7bit',
			mimetype: 'image/jpeg',
			size: 1024,
			destination: 'uploads',
			filename: 'unique-filename.jpg',
			path: 'uploads/unique-filename.jpg',
			buffer: Buffer.from('test'),
			stream: null as any
		}

		const mockUploadDto: UploadFileDto = {
			type: FileType.IMAGE,
			toolId: 1
		}

		const mockCreatedFile = {
			id: 1,
			filename: 'unique-filename.jpg',
			originalName: 'test-image.jpg',
			path: 'uploads/unique-filename.jpg',
			mimeType: 'image/jpeg',
			size: 1024,
			type: FileType.IMAGE,
			toolId: 1,
			machineId: null,
			workId: null,
			stageId: null,
			createdAt: new Date()
		}

		it('should upload file successfully with toolId', async () => {
			mockPrismaService.fileUpload.create.mockResolvedValue(
				mockCreatedFile
			)

			const result = await service.uploadFile(mockFile, mockUploadDto)

			expect(prismaService.fileUpload.create).toHaveBeenCalledWith({
				data: {
					filename: 'unique-filename.jpg',
					originalName: 'test-image.jpg',
					path: 'uploads/unique-filename.jpg',
					mimeType: 'image/jpeg',
					size: 1024,
					type: FileType.IMAGE,
					toolId: 1,
					machineId: undefined,
					workId: undefined,
					stageId: undefined
				}
			})
			expect(result).toEqual(mockCreatedFile)
		})

		it('should upload file with machineId', async () => {
			const dtoWithMachine: UploadFileDto = {
				type: FileType.IMAGE,
				machineId: 2
			}

			const fileWithMachine = {
				...mockCreatedFile,
				toolId: null,
				machineId: 2
			}

			mockPrismaService.fileUpload.create.mockResolvedValue(
				fileWithMachine
			)

			const result = await service.uploadFile(mockFile, dtoWithMachine)

			expect(prismaService.fileUpload.create).toHaveBeenCalledWith({
				data: expect.objectContaining({
					machineId: 2
				})
			})
			expect(result.machineId).toBe(2)
		})

		it('should upload file with workId', async () => {
			const dtoWithWork: UploadFileDto = {
				type: FileType.IMAGE,
				workId: 3
			}

			const fileWithWork = {
				...mockCreatedFile,
				toolId: null,
				workId: 3
			}

			mockPrismaService.fileUpload.create.mockResolvedValue(fileWithWork)

			const result = await service.uploadFile(mockFile, dtoWithWork)

			expect(result.workId).toBe(3)
		})

		it('should upload file with stageId', async () => {
			const dtoWithStage: UploadFileDto = {
				type: FileType.IMAGE,
				stageId: 4
			}

			const fileWithStage = {
				...mockCreatedFile,
				toolId: null,
				stageId: 4
			}

			mockPrismaService.fileUpload.create.mockResolvedValue(fileWithStage)

			const result = await service.uploadFile(mockFile, dtoWithStage)

			expect(result.stageId).toBe(4)
		})

		it('should upload file with multiple relations', async () => {
			const dtoWithMultiple: UploadFileDto = {
				type: FileType.IMAGE,
				toolId: 1,
				machineId: 2
			}

			const fileWithMultiple = {
				...mockCreatedFile,
				toolId: 1,
				machineId: 2
			}

			mockPrismaService.fileUpload.create.mockResolvedValue(
				fileWithMultiple
			)

			const result = await service.uploadFile(mockFile, dtoWithMultiple)

			expect(result.toolId).toBe(1)
			expect(result.machineId).toBe(2)
		})

		it('should throw BadRequestException if file is not provided', async () => {
			await expect(
				service.uploadFile(null as any, mockUploadDto)
			).rejects.toThrow(BadRequestException)
			await expect(
				service.uploadFile(null as any, mockUploadDto)
			).rejects.toThrow('Файл не предоставлен')

			expect(prismaService.fileUpload.create).not.toHaveBeenCalled()
		})

		it('should throw BadRequestException if no relation is provided', async () => {
			const dtoWithoutRelation: UploadFileDto = {
				type: FileType.IMAGE
			}

			await expect(
				service.uploadFile(mockFile, dtoWithoutRelation)
			).rejects.toThrow(BadRequestException)
			await expect(
				service.uploadFile(mockFile, dtoWithoutRelation)
			).rejects.toThrow(
				'Необходимо указать хотя бы одну связь (toolId, machineId, workId, stageId)'
			)

			expect(prismaService.fileUpload.create).not.toHaveBeenCalled()
		})

		it('should handle different file types', async () => {
			const videoDto: UploadFileDto = {
				type: FileType.VIDEO,
				toolId: 1
			}

			const videoFile = {
				...mockCreatedFile,
				type: FileType.VIDEO
			}

			mockPrismaService.fileUpload.create.mockResolvedValue(videoFile)

			const result = await service.uploadFile(mockFile, videoDto)

			expect(result.type).toBe(FileType.VIDEO)
		})

		it('should handle large files', async () => {
			const largeFile: Express.Multer.File = {
				...mockFile,
				size: 100 * 1024 * 1024 // 100MB
			}

			const largeCreatedFile = {
				...mockCreatedFile,
				size: 100 * 1024 * 1024
			}

			mockPrismaService.fileUpload.create.mockResolvedValue(
				largeCreatedFile
			)

			const result = await service.uploadFile(largeFile, mockUploadDto)

			expect(result.size).toBe(100 * 1024 * 1024)
		})
	})

	describe('getFile', () => {
		const mockFile = {
			id: 1,
			filename: 'test-file.jpg',
			originalName: 'original.jpg',
			path: 'uploads/test-file.jpg',
			mimeType: 'image/jpeg',
			size: 1024,
			type: FileType.IMAGE,
			toolId: 1,
			machineId: null,
			workId: null,
			stageId: null,
			createdAt: new Date()
		}

		it('should return file by id', async () => {
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(mockFile)
			;(fs.existsSync as jest.Mock).mockReturnValue(true)

			const result = await service.getFile(1)

			expect(prismaService.fileUpload.findUnique).toHaveBeenCalledWith({
				where: { id: 1 }
			})
			expect(fs.existsSync).toHaveBeenCalledWith('uploads/test-file.jpg')
			expect(result).toEqual(mockFile)
		})

		it('should throw NotFoundException if file does not exist in database', async () => {
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(null)

			await expect(service.getFile(999)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.getFile(999)).rejects.toThrow('Файл не найден')
		})

		it('should throw NotFoundException if file does not exist on disk', async () => {
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(mockFile)
			;(fs.existsSync as jest.Mock).mockReturnValue(false)

			await expect(service.getFile(1)).rejects.toThrow(NotFoundException)
			await expect(service.getFile(1)).rejects.toThrow(
				'Файл не найден на диске'
			)

			expect(fs.existsSync).toHaveBeenCalledWith('uploads/test-file.jpg')
		})
	})

	describe('deleteFile', () => {
		const mockFile = {
			id: 1,
			filename: 'test-file.jpg',
			originalName: 'original.jpg',
			path: 'uploads/test-file.jpg',
			mimeType: 'image/jpeg',
			size: 1024,
			type: FileType.IMAGE,
			toolId: 1,
			machineId: null,
			workId: null,
			stageId: null,
			createdAt: new Date()
		}

		it('should delete file successfully', async () => {
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(mockFile)
			;(fs.existsSync as jest.Mock).mockReturnValue(true)
			mockPrismaService.fileUpload.delete.mockResolvedValue(mockFile)

			const result = await service.deleteFile(1)

			expect(fs.existsSync).toHaveBeenCalledWith('uploads/test-file.jpg')
			expect(fs.unlinkSync).toHaveBeenCalledWith('uploads/test-file.jpg')
			expect(prismaService.fileUpload.delete).toHaveBeenCalledWith({
				where: { id: 1 }
			})
			expect(result).toEqual({ message: 'Файл успешно удален' })
		})

		it('should delete file from database even if physical file does not exist', async () => {
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(mockFile)
			;(fs.existsSync as jest.Mock).mockReturnValueOnce(true) // for getFile check
			;(fs.existsSync as jest.Mock).mockReturnValueOnce(false) // for delete check
			mockPrismaService.fileUpload.delete.mockResolvedValue(mockFile)

			const result = await service.deleteFile(1)

			expect(fs.unlinkSync).not.toHaveBeenCalled()
			expect(prismaService.fileUpload.delete).toHaveBeenCalledWith({
				where: { id: 1 }
			})
			expect(result).toEqual({ message: 'Файл успешно удален' })
		})

		it('should throw NotFoundException if file does not exist', async () => {
			mockPrismaService.fileUpload.findUnique.mockResolvedValue(null)

			await expect(service.deleteFile(999)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.deleteFile(999)).rejects.toThrow(
				'Файл не найден'
			)

			expect(fs.unlinkSync).not.toHaveBeenCalled()
			expect(prismaService.fileUpload.delete).not.toHaveBeenCalled()
		})
	})

	describe('getFilesByEntity', () => {
		const mockFiles = [
			{
				id: 1,
				filename: 'file1.jpg',
				originalName: 'original1.jpg',
				path: 'uploads/file1.jpg',
				mimeType: 'image/jpeg',
				size: 1024,
				type: FileType.IMAGE,
				toolId: 1,
				machineId: null,
				workId: null,
				stageId: null,
				createdAt: new Date('2025-01-02')
			},
			{
				id: 2,
				filename: 'file2.jpg',
				originalName: 'original2.jpg',
				path: 'uploads/file2.jpg',
				mimeType: 'image/jpeg',
				size: 2048,
				type: FileType.IMAGE,
				toolId: 1,
				machineId: null,
				workId: null,
				stageId: null,
				createdAt: new Date('2025-01-01')
			}
		]

		it('should get files by toolId', async () => {
			mockPrismaService.fileUpload.findMany.mockResolvedValue(mockFiles)

			const result = await service.getFilesByEntity(1)

			expect(prismaService.fileUpload.findMany).toHaveBeenCalledWith({
				where: {
					toolId: 1,
					machineId: undefined,
					workId: undefined,
					stageId: undefined
				},
				orderBy: {
					createdAt: 'desc'
				}
			})
			expect(result).toEqual(mockFiles)
			expect(result).toHaveLength(2)
		})

		it('should get files by machineId', async () => {
			const machineFiles = [
				{
					...mockFiles[0],
					toolId: null,
					machineId: 2
				}
			]

			mockPrismaService.fileUpload.findMany.mockResolvedValue(
				machineFiles
			)

			const result = await service.getFilesByEntity(undefined, 2)

			expect(prismaService.fileUpload.findMany).toHaveBeenCalledWith({
				where: {
					toolId: undefined,
					machineId: 2,
					workId: undefined,
					stageId: undefined
				},
				orderBy: {
					createdAt: 'desc'
				}
			})
			expect(result[0].machineId).toBe(2)
		})

		it('should get files by workId', async () => {
			const workFiles = [
				{
					...mockFiles[0],
					toolId: null,
					workId: 3
				}
			]

			mockPrismaService.fileUpload.findMany.mockResolvedValue(workFiles)

			const result = await service.getFilesByEntity(
				undefined,
				undefined,
				3
			)

			expect(result[0].workId).toBe(3)
		})

		it('should get files by stageId', async () => {
			const stageFiles = [
				{
					...mockFiles[0],
					toolId: null,
					stageId: 4
				}
			]

			mockPrismaService.fileUpload.findMany.mockResolvedValue(stageFiles)

			const result = await service.getFilesByEntity(
				undefined,
				undefined,
				undefined,
				4
			)

			expect(result[0].stageId).toBe(4)
		})

		it('should return empty array if no files found', async () => {
			mockPrismaService.fileUpload.findMany.mockResolvedValue([])

			const result = await service.getFilesByEntity(999)

			expect(result).toEqual([])
		})

		it('should handle multiple entity filters', async () => {
			mockPrismaService.fileUpload.findMany.mockResolvedValue(mockFiles)

			await service.getFilesByEntity(1, 2, 3, 4)

			expect(prismaService.fileUpload.findMany).toHaveBeenCalledWith({
				where: {
					toolId: 1,
					machineId: 2,
					workId: 3,
					stageId: 4
				},
				orderBy: {
					createdAt: 'desc'
				}
			})
		})

		it('should order files by createdAt desc', async () => {
			mockPrismaService.fileUpload.findMany.mockResolvedValue(mockFiles)

			await service.getFilesByEntity(1)

			expect(prismaService.fileUpload.findMany).toHaveBeenCalledWith(
				expect.objectContaining({
					orderBy: {
						createdAt: 'desc'
					}
				})
			)
		})
	})

	describe('edge cases', () => {
		it('should handle files with special characters in filename', async () => {
			const specialFile: Express.Multer.File = {
				fieldname: 'file',
				originalname: 'файл с пробелами & символами!.jpg',
				encoding: '7bit',
				mimetype: 'image/jpeg',
				size: 1024,
				destination: 'uploads',
				filename: 'safe-filename.jpg',
				path: 'uploads/safe-filename.jpg',
				buffer: Buffer.from('test'),
				stream: null as any
			}

			const dto: UploadFileDto = {
				type: FileType.IMAGE,
				toolId: 1
			}

			mockPrismaService.fileUpload.create.mockResolvedValue({
				id: 1,
				filename: 'safe-filename.jpg',
				originalName: 'файл с пробелами & символами!.jpg',
				path: 'uploads/safe-filename.jpg',
				mimeType: 'image/jpeg',
				size: 1024,
				type: FileType.IMAGE,
				toolId: 1
			})

			const result = await service.uploadFile(specialFile, dto)

			expect(result.originalName).toBe(
				'файл с пробелами & символами!.jpg'
			)
			expect(result.filename).toBe('safe-filename.jpg')
		})

		it('should handle zero-byte files', async () => {
			const emptyFile: Express.Multer.File = {
				fieldname: 'file',
				originalname: 'empty.txt',
				encoding: '7bit',
				mimetype: 'text/plain',
				size: 0,
				destination: 'uploads',
				filename: 'empty.txt',
				path: 'uploads/empty.txt',
				buffer: Buffer.from(''),
				stream: null as any
			}

			const dto: UploadFileDto = {
				type: FileType.VIDEO,
				toolId: 1
			}

			mockPrismaService.fileUpload.create.mockResolvedValue({
				id: 1,
				filename: 'empty.txt',
				size: 0,
				toolId: 1
			})

			const result = await service.uploadFile(emptyFile, dto)

			expect(result.size).toBe(0)
		})
	})
})
