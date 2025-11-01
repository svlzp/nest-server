/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/unbound-method */
import { CreateToolDto } from './dto/create-tool.dto'
import { UpdateToolDto } from './dto/update-tool.dto'
import { ToolsService } from './tools.service'
import { BadRequestException, NotFoundException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { FileType } from '__generated__'
import { FilesService } from '@/files/files.service'
import { PrismaService } from '@/prisma/prisma.service'

describe('ToolsService', () => {
	let service: ToolsService
	let prismaService: PrismaService
	let filesService: FilesService

	const mockPrismaService = {
		tools: {
			findUnique: jest.fn(),
			create: jest.fn(),
			findMany: jest.fn(),
			update: jest.fn(),
			delete: jest.fn()
		}
	}

	const mockFilesService = {
		uploadFile: jest.fn(),
		deleteFile: jest.fn(),
		getFile: jest.fn()
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				ToolsService,
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

		service = module.get<ToolsService>(ToolsService)
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
		const createToolDto: CreateToolDto = {
			name: 'Фреза концевая',
			tool_id: 'T001',
			description: 'Концевая фреза 12мм',
			size: '12mm',
			type: 'Фреза'
		}

		const mockTool = {
			id: 1,
			name: 'Фреза концевая',
			tool_id: 'T001',
			description: 'Концевая фреза 12мм',
			size: '12mm',
			type: 'Фреза',
			createdAt: new Date(),
			updatedAt: new Date()
		}

		const mockToolWithFiles = {
			...mockTool,
			files: [
				{
					id: 1,
					filename: 'tool-photo.jpg',
					path: 'uploads/tools/tool-photo.jpg',
					mimetype: 'image/jpeg',
					size: 2048,
					type: FileType.IMAGE,
					toolId: 1,
					createdAt: new Date()
				}
			]
		}

		it('should create a new tool successfully without files', async () => {
			mockPrismaService.tools.findUnique.mockResolvedValue(null)
			mockPrismaService.tools.create.mockResolvedValue(mockTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(null)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(
				mockToolWithFiles
			)

			const result = await service.create(createToolDto)

			expect(prismaService.tools.findUnique).toHaveBeenCalledWith({
				where: { tool_id: createToolDto.tool_id }
			})
			expect(prismaService.tools.create).toHaveBeenCalledWith({
				data: {
					name: createToolDto.name,
					tool_id: createToolDto.tool_id,
					description: createToolDto.description,
					size: createToolDto.size,
					type: createToolDto.type
				}
			})
			expect(result).toEqual(mockToolWithFiles)
		})

		it('should create a new tool with files', async () => {
			const mockFiles = [
				{
					fieldname: 'files',
					originalname: 'tool1.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					size: 2048,
					buffer: Buffer.from('test'),
					destination: 'uploads',
					filename: 'tool1.jpg',
					path: 'uploads/tool1.jpg'
				} as Express.Multer.File,
				{
					fieldname: 'files',
					originalname: 'tool2.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					size: 3072,
					buffer: Buffer.from('test2'),
					destination: 'uploads',
					filename: 'tool2.jpg',
					path: 'uploads/tool2.jpg'
				} as Express.Multer.File
			]

			mockPrismaService.tools.findUnique.mockResolvedValue(null)
			mockPrismaService.tools.create.mockResolvedValue(mockTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(null)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(
				mockToolWithFiles
			)
			mockFilesService.uploadFile.mockResolvedValue({
				id: 1,
				filename: 'tool-photo.jpg'
			})

			const result = await service.create(createToolDto, mockFiles)

			expect(prismaService.tools.create).toHaveBeenCalled()
			expect(filesService.uploadFile).toHaveBeenCalledTimes(2)
			expect(filesService.uploadFile).toHaveBeenNthCalledWith(
				1,
				mockFiles[0],
				{
					type: FileType.IMAGE,
					toolId: mockTool.id
				}
			)
			expect(filesService.uploadFile).toHaveBeenNthCalledWith(
				2,
				mockFiles[1],
				{
					type: FileType.IMAGE,
					toolId: mockTool.id
				}
			)
			expect(result).toEqual(mockToolWithFiles)
		})

		it('should throw BadRequestException if tool_id already exists', async () => {
			mockPrismaService.tools.findUnique.mockResolvedValue(mockTool)

			await expect(service.create(createToolDto)).rejects.toThrow(
				BadRequestException
			)
			await expect(service.create(createToolDto)).rejects.toThrow(
				`Инструмент с ID ${createToolDto.tool_id} уже существует`
			)

			expect(prismaService.tools.findUnique).toHaveBeenCalledWith({
				where: { tool_id: createToolDto.tool_id }
			})
			expect(prismaService.tools.create).not.toHaveBeenCalled()
		})
	})

	describe('findAll', () => {
		it('should return all tools with files', async () => {
			const mockTools = [
				{
					id: 1,
					name: 'Фреза концевая',
					tool_id: 'T001',
					description: 'Концевая фреза 12мм',
					size: '12mm',
					type: 'Фреза',
					createdAt: new Date('2025-01-02'),
					updatedAt: new Date('2025-01-02'),
					files: [
						{
							id: 1,
							filename: 'tool1.jpg',
							createdAt: new Date('2025-01-02T10:00:00')
						},
						{
							id: 2,
							filename: 'tool2.jpg',
							createdAt: new Date('2025-01-02T11:00:00')
						}
					]
				},
				{
					id: 2,
					name: 'Сверло',
					tool_id: 'T002',
					description: 'Сверло 8мм',
					size: '8mm',
					type: 'Сверло',
					createdAt: new Date('2025-01-01'),
					updatedAt: new Date('2025-01-01'),
					files: []
				}
			]

			mockPrismaService.tools.findMany.mockResolvedValue(mockTools)

			const result = await service.findAll()

			expect(prismaService.tools.findMany).toHaveBeenCalledWith({
				include: {
					files: {
						orderBy: {
							createdAt: 'asc'
						}
					}
				},
				orderBy: {
					createdAt: 'desc'
				}
			})
			expect(result).toEqual(mockTools)
			expect(result).toHaveLength(2)
		})

		it('should return empty array if no tools exist', async () => {
			mockPrismaService.tools.findMany.mockResolvedValue([])

			const result = await service.findAll()

			expect(result).toEqual([])
		})
	})

	describe('findOne', () => {
		const mockTool = {
			id: 1,
			name: 'Фреза концевая',
			tool_id: 'T001',
			description: 'Концевая фреза 12мм',
			size: '12mm',
			type: 'Фреза',
			createdAt: new Date(),
			updatedAt: new Date(),
			files: [
				{
					id: 1,
					filename: 'tool-photo.jpg',
					path: 'uploads/tools/tool-photo.jpg',
					createdAt: new Date('2025-01-01T10:00:00')
				}
			]
		}

		it('should return tool by id with files', async () => {
			mockPrismaService.tools.findUnique.mockResolvedValue(mockTool)

			const result = await service.findOne(1)

			expect(prismaService.tools.findUnique).toHaveBeenCalledWith({
				where: { id: 1 },
				include: {
					files: {
						orderBy: {
							createdAt: 'asc'
						}
					}
				}
			})
			expect(result).toEqual(mockTool)
		})

		it('should throw NotFoundException if tool does not exist', async () => {
			mockPrismaService.tools.findUnique.mockResolvedValue(null)

			await expect(service.findOne(999)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.findOne(999)).rejects.toThrow(
				'Инструмент с ID 999 не найден'
			)

			expect(prismaService.tools.findUnique).toHaveBeenCalledWith({
				where: { id: 999 },
				include: {
					files: {
						orderBy: {
							createdAt: 'asc'
						}
					}
				}
			})
		})
	})

	describe('update', () => {
		const updateToolDto: UpdateToolDto = {
			name: 'Фреза обновленная',
			description: 'Новое описание',
			size: '15mm'
		}

		const mockTool = {
			id: 1,
			name: 'Фреза концевая',
			tool_id: 'T001',
			description: 'Концевая фреза 12мм',
			size: '12mm',
			type: 'Фреза',
			createdAt: new Date(),
			updatedAt: new Date(),
			files: []
		}

		const mockUpdatedTool = {
			...mockTool,
			name: 'Фреза обновленная',
			description: 'Новое описание',
			size: '15mm',
			files: [
				{
					id: 1,
					filename: 'new-photo.jpg'
				}
			]
		}

		it('should update tool successfully without files', async () => {
			mockPrismaService.tools.findUnique.mockResolvedValue(mockTool)
			mockPrismaService.tools.update.mockResolvedValue(mockUpdatedTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(mockTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(
				mockUpdatedTool
			)

			const result = await service.update(1, updateToolDto)

			expect(prismaService.tools.findUnique).toHaveBeenCalledWith({
				where: { id: 1 },
				include: {
					files: {
						orderBy: {
							createdAt: 'asc'
						}
					}
				}
			})
			expect(prismaService.tools.update).toHaveBeenCalledWith({
				where: { id: 1 },
				data: {
					name: updateToolDto.name,
					tool_id: updateToolDto.tool_id,
					description: updateToolDto.description,
					size: updateToolDto.size,
					type: updateToolDto.type
				}
			})
			expect(result).toEqual(mockUpdatedTool)
		})

		it('should update tool with new files', async () => {
			const mockFiles = [
				{
					fieldname: 'files',
					originalname: 'new-tool.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					size: 2048,
					buffer: Buffer.from('test'),
					destination: 'uploads',
					filename: 'new-tool.jpg',
					path: 'uploads/new-tool.jpg'
				} as Express.Multer.File
			]

			mockPrismaService.tools.findUnique.mockResolvedValue(mockTool)
			mockPrismaService.tools.update.mockResolvedValue(mockUpdatedTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(mockTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(
				mockUpdatedTool
			)
			mockFilesService.uploadFile.mockResolvedValue({
				id: 1,
				filename: 'new-photo.jpg'
			})

			const result = await service.update(1, updateToolDto, mockFiles)

			expect(filesService.uploadFile).toHaveBeenCalledWith(mockFiles[0], {
				type: FileType.IMAGE,
				toolId: 1
			})
			expect(result).toEqual(mockUpdatedTool)
		})

		it('should throw BadRequestException if new tool_id already exists', async () => {
			const updateWithToolId: UpdateToolDto = {
				...updateToolDto,
				tool_id: 'T002'
			}

			const existingTool = {
				id: 2,
				name: 'Another Tool',
				tool_id: 'T002',
				description: 'Another tool',
				size: '10mm',
				type: 'Tool',
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.tools.findUnique.mockResolvedValueOnce(mockTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(
				existingTool
			)

			await expect(service.update(1, updateWithToolId)).rejects.toThrow(
				BadRequestException
			)

			expect(prismaService.tools.update).not.toHaveBeenCalled()
		})

		it('should allow updating tool with same tool_id', async () => {
			const updateWithSameToolId: UpdateToolDto = {
				...updateToolDto,
				tool_id: 'T001'
			}

			mockPrismaService.tools.findUnique.mockResolvedValueOnce(mockTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(mockTool)
			mockPrismaService.tools.update.mockResolvedValue(mockUpdatedTool)
			mockPrismaService.tools.findUnique.mockResolvedValueOnce(
				mockUpdatedTool
			)

			const result = await service.update(1, updateWithSameToolId)

			expect(prismaService.tools.update).toHaveBeenCalled()
			expect(result).toEqual(mockUpdatedTool)
		})

		it('should throw NotFoundException if tool does not exist', async () => {
			mockPrismaService.tools.findUnique.mockResolvedValue(null)

			await expect(service.update(999, updateToolDto)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.update(999, updateToolDto)).rejects.toThrow(
				'Инструмент с ID 999 не найден'
			)

			expect(prismaService.tools.update).not.toHaveBeenCalled()
		})
	})

	describe('remove', () => {
		const mockTool = {
			id: 1,
			name: 'Фреза концевая',
			tool_id: 'T001',
			description: 'Концевая фреза 12мм',
			size: '12mm',
			type: 'Фреза',
			createdAt: new Date(),
			updatedAt: new Date(),
			files: []
		}

		it('should delete tool successfully', async () => {
			mockPrismaService.tools.findUnique.mockResolvedValue(mockTool)
			mockPrismaService.tools.delete.mockResolvedValue(mockTool)

			const result = await service.remove(1)

			expect(prismaService.tools.findUnique).toHaveBeenCalled()
			expect(prismaService.tools.delete).toHaveBeenCalledWith({
				where: { id: 1 }
			})
			expect(result).toEqual({
				message: 'Инструмент с ID 1 успешно удален'
			})
		})

		it('should throw NotFoundException if tool does not exist', async () => {
			mockPrismaService.tools.findUnique.mockResolvedValue(null)

			await expect(service.remove(999)).rejects.toThrow(NotFoundException)
			await expect(service.remove(999)).rejects.toThrow(
				'Инструмент с ID 999 не найден'
			)

			expect(prismaService.tools.delete).not.toHaveBeenCalled()
		})
	})

	describe('removeFile', () => {
		const mockFile = {
			id: 1,
			filename: 'tool-photo.jpg',
			path: 'uploads/tools/tool-photo.jpg',
			mimetype: 'image/jpeg',
			size: 2048,
			type: FileType.IMAGE,
			toolId: 1,
			machineId: null,
			workId: null,
			stageId: null,
			createdAt: new Date()
		}

		it('should remove file successfully', async () => {
			mockFilesService.getFile.mockResolvedValue(mockFile)
			mockFilesService.deleteFile.mockResolvedValue({
				message: 'Файл успешно удален'
			})

			const result = await service.removeFile(1, 1)

			expect(filesService.getFile).toHaveBeenCalledWith(1)
			expect(filesService.deleteFile).toHaveBeenCalledWith(1)
			expect(result).toEqual({ message: 'Файл успешно удален' })
		})

		it('should throw BadRequestException if file does not belong to tool', async () => {
			const wrongToolFile = {
				...mockFile,
				toolId: 2
			}

			mockFilesService.getFile.mockResolvedValue(wrongToolFile)

			await expect(service.removeFile(1, 1)).rejects.toThrow(
				BadRequestException
			)
			await expect(service.removeFile(1, 1)).rejects.toThrow(
				'Файл не принадлежит данному инструменту'
			)

			expect(filesService.deleteFile).not.toHaveBeenCalled()
		})

		it('should throw error if file does not exist', async () => {
			mockFilesService.getFile.mockRejectedValue(
				new NotFoundException('Файл не найден')
			)

			await expect(service.removeFile(1, 999)).rejects.toThrow(
				NotFoundException
			)

			expect(filesService.deleteFile).not.toHaveBeenCalled()
		})
	})
})
