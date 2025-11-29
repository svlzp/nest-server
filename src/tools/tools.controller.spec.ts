import { CreateToolDto } from './dto/create-tool.dto'
import { UpdateToolDto } from './dto/update-tool.dto'
import { ToolsController } from './tools.controller'
import { ToolsService } from './tools.service'
import { Test, TestingModule } from '@nestjs/testing'
import { AuthGuard } from '@/auth/guards/auth.guard'
import { JwtAuthGuard } from '@/auth/guards/jwt.guard'

describe('ToolsController', () => {
	let controller: ToolsController
	let service: ToolsService

	const mockAuthGuard = {
		canActivate: jest.fn(() => true)
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

	const mockToolsService = {
		create: jest.fn(),
		findAll: jest.fn(),
		findOne: jest.fn(),
		update: jest.fn(),
		remove: jest.fn(),
		removeFile: jest.fn()
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [ToolsController],
			providers: [
				{
					provide: ToolsService,
					useValue: mockToolsService
				}
			]
		})
			.overrideGuard(AuthGuard)
			.useValue(mockAuthGuard)
			.overrideGuard(JwtAuthGuard)
			.useValue(mockAuthGuard)
			.compile()

		controller = module.get<ToolsController>(ToolsController)
		service = module.get<ToolsService>(ToolsService)

		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})

	describe('create', () => {
		const createToolDto: CreateToolDto = {
			name: 'Фреза концевая',
			tool_id: 'T001',
			description: 'Концевая фреза 12мм',
			size: '12mm',
			type: 'Фреза'
		}

		it('should create a tool without files', async () => {
			mockToolsService.create.mockResolvedValue(mockTool)

			const result = await controller.create(createToolDto)

			expect(result).toEqual(mockTool)
			expect(service.create).toHaveBeenCalledWith(
				createToolDto,
				undefined
			)
			expect(service.create).toHaveBeenCalledTimes(1)
		})

		it('should create a tool with files', async () => {
			const mockFiles = [
				{
					fieldname: 'files',
					originalname: 'image1.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					size: 1024,
					destination: './uploads',
					filename: 'uuid-image1.jpg',
					path: './uploads/uuid-image1.jpg'
				}
			] as Express.Multer.File[]

			const toolWithFiles = {
				...mockTool,
				files: [
					{
						id: 1,
						filename: 'uuid-image1.jpg',
						originalName: 'image1.jpg',
						mimeType: 'image/jpeg',
						size: 1024,
						path: './uploads/uuid-image1.jpg',
						type: 'IMAGE'
					}
				]
			}

			mockToolsService.create.mockResolvedValue(toolWithFiles)

			const result = await controller.create(createToolDto, mockFiles)

			expect(result).toEqual(toolWithFiles)
			expect(service.create).toHaveBeenCalledWith(
				createToolDto,
				mockFiles
			)
			expect(service.create).toHaveBeenCalledTimes(1)
		})

		it('should throw error when tool_id already exists', async () => {
			const error = new Error(
				`Инструмент с ID ${createToolDto.tool_id} уже существует`
			)
			mockToolsService.create.mockRejectedValue(error)

			await expect(controller.create(createToolDto)).rejects.toThrow(
				error
			)
			expect(service.create).toHaveBeenCalledWith(
				createToolDto,
				undefined
			)
		})
	})

	describe('findAll', () => {
		it('should return an array of tools', async () => {
			const mockTools = [
				mockTool,
				{ ...mockTool, id: 2, tool_id: 'T002' }
			]
			mockToolsService.findAll.mockResolvedValue(mockTools)

			const result = await controller.findAll()

			expect(result).toEqual(mockTools)
			expect(service.findAll).toHaveBeenCalledTimes(1)
		})

		it('should return an empty array when no tools exist', async () => {
			mockToolsService.findAll.mockResolvedValue([])

			const result = await controller.findAll()

			expect(result).toEqual([])
			expect(service.findAll).toHaveBeenCalledTimes(1)
		})
	})

	describe('findOne', () => {
		it('should return a tool by id', async () => {
			mockToolsService.findOne.mockResolvedValue(mockTool)

			const result = await controller.findOne(1)

			expect(result).toEqual(mockTool)
			expect(service.findOne).toHaveBeenCalledWith(1)
			expect(service.findOne).toHaveBeenCalledTimes(1)
		})

		it('should throw NotFoundException when tool does not exist', async () => {
			const error = new Error('Инструмент с ID 999 не найден')
			mockToolsService.findOne.mockRejectedValue(error)

			await expect(controller.findOne(999)).rejects.toThrow(error)
			expect(service.findOne).toHaveBeenCalledWith(999)
		})
	})

	describe('update', () => {
		const updateToolDto: UpdateToolDto = {
			name: 'Фреза концевая обновленная',
			description: 'Обновленное описание'
		}

		it('should update a tool without files', async () => {
			const updatedTool = {
				...mockTool,
				name: updateToolDto.name,
				description: updateToolDto.description
			}
			mockToolsService.update.mockResolvedValue(updatedTool)

			const result = await controller.update(1, updateToolDto)

			expect(result).toEqual(updatedTool)
			expect(service.update).toHaveBeenCalledWith(
				1,
				updateToolDto,
				undefined
			)
			expect(service.update).toHaveBeenCalledTimes(1)
		})

		it('should update a tool with new files', async () => {
			const mockFiles = [
				{
					fieldname: 'files',
					originalname: 'new-image.jpg',
					encoding: '7bit',
					mimetype: 'image/jpeg',
					size: 2048,
					destination: './uploads',
					filename: 'uuid-new-image.jpg',
					path: './uploads/uuid-new-image.jpg'
				}
			] as Express.Multer.File[]

			const updatedToolWithFiles = {
				...mockTool,
				...updateToolDto,
				files: [
					{
						id: 2,
						filename: 'uuid-new-image.jpg',
						originalName: 'new-image.jpg',
						mimeType: 'image/jpeg',
						size: 2048,
						path: './uploads/uuid-new-image.jpg',
						type: 'IMAGE'
					}
				]
			}

			mockToolsService.update.mockResolvedValue(updatedToolWithFiles)

			const result = await controller.update(1, updateToolDto, mockFiles)

			expect(result).toEqual(updatedToolWithFiles)
			expect(service.update).toHaveBeenCalledWith(
				1,
				updateToolDto,
				mockFiles
			)
			expect(service.update).toHaveBeenCalledTimes(1)
		})

		it('should throw NotFoundException when updating non-existent tool', async () => {
			const error = new Error('Инструмент с ID 999 не найден')
			mockToolsService.update.mockRejectedValue(error)

			await expect(controller.update(999, updateToolDto)).rejects.toThrow(
				error
			)
			expect(service.update).toHaveBeenCalledWith(
				999,
				updateToolDto,
				undefined
			)
		})

		it('should update only specified fields', async () => {
			const partialUpdate: UpdateToolDto = {
				description: 'Только новое описание'
			}

			const partiallyUpdatedTool = {
				...mockTool,
				description: partialUpdate.description
			}

			mockToolsService.update.mockResolvedValue(partiallyUpdatedTool)

			const result = await controller.update(1, partialUpdate)

			expect(result).toEqual(partiallyUpdatedTool)
			expect(result.name).toEqual(mockTool.name) // name не изменился
			expect(service.update).toHaveBeenCalledWith(
				1,
				partialUpdate,
				undefined
			)
		})
	})

	describe('remove', () => {
		it('should delete a tool successfully', async () => {
			const deleteResponse = {
				message: 'Инструмент успешно удален',
				id: 1
			}
			mockToolsService.remove.mockResolvedValue(deleteResponse)

			const result = await controller.remove(1)

			expect(result).toEqual(deleteResponse)
			expect(service.remove).toHaveBeenCalledWith(1)
			expect(service.remove).toHaveBeenCalledTimes(1)
		})

		it('should throw NotFoundException when deleting non-existent tool', async () => {
			const error = new Error('Инструмент с ID 999 не найден')
			mockToolsService.remove.mockRejectedValue(error)

			await expect(controller.remove(999)).rejects.toThrow(error)
			expect(service.remove).toHaveBeenCalledWith(999)
		})
	})

	describe('removeFile', () => {
		it('should delete a file from a tool successfully', async () => {
			const deleteResponse = {
				message: 'Файл успешно удален',
				fileId: 1
			}
			mockToolsService.removeFile.mockResolvedValue(deleteResponse)

			const result = await controller.removeFile(1, 1)

			expect(result).toEqual(deleteResponse)
			expect(service.removeFile).toHaveBeenCalledWith(1, 1)
			expect(service.removeFile).toHaveBeenCalledTimes(1)
		})

		it('should throw NotFoundException when tool does not exist', async () => {
			const error = new Error('Инструмент с ID 999 не найден')
			mockToolsService.removeFile.mockRejectedValue(error)

			await expect(controller.removeFile(999, 1)).rejects.toThrow(error)
			expect(service.removeFile).toHaveBeenCalledWith(999, 1)
		})

		it('should throw NotFoundException when file does not exist', async () => {
			const error = new Error('Файл с ID 999 не найден')
			mockToolsService.removeFile.mockRejectedValue(error)

			await expect(controller.removeFile(1, 999)).rejects.toThrow(error)
			expect(service.removeFile).toHaveBeenCalledWith(1, 999)
		})

		it('should throw error when file does not belong to tool', async () => {
			const error = new Error('Файл не принадлежит этому инструменту')
			mockToolsService.removeFile.mockRejectedValue(error)

			await expect(controller.removeFile(1, 5)).rejects.toThrow(error)
			expect(service.removeFile).toHaveBeenCalledWith(1, 5)
		})
	})

	describe('File validation', () => {
		it('should handle multiple files upload', async () => {
			const createToolDto: CreateToolDto = {
				name: 'Инструмент с фото',
				tool_id: 'T005',
				description: 'Тестовый инструмент',
				size: '10mm',
				type: 'Сверло'
			}

			const mockFiles = [
				{
					originalname: 'image1.jpg',
					mimetype: 'image/jpeg',
					size: 1024
				},
				{
					originalname: 'image2.png',
					mimetype: 'image/png',
					size: 2048
				},
				{
					originalname: 'image3.webp',
					mimetype: 'image/webp',
					size: 1500
				}
			] as Express.Multer.File[]

			const toolWithMultipleFiles = {
				...mockTool,
				files: mockFiles.map((file, index) => ({
					id: index + 1,
					filename: `uuid-${file.originalname}`,
					originalName: file.originalname,
					mimeType: file.mimetype,
					size: file.size,
					path: `./uploads/uuid-${file.originalname}`,
					type: 'IMAGE'
				}))
			}

			mockToolsService.create.mockResolvedValue(toolWithMultipleFiles)

			const result = await controller.create(createToolDto, mockFiles)

			expect(result.files).toHaveLength(3)
			expect(service.create).toHaveBeenCalledWith(
				createToolDto,
				mockFiles
			)
		})

		it('should handle empty files array', async () => {
			const createToolDto: CreateToolDto = {
				name: 'Инструмент без фото',
				tool_id: 'T006',
				description: 'Без изображений',
				size: '8mm',
				type: 'Метчик'
			}

			mockToolsService.create.mockResolvedValue(mockTool)

			const result = await controller.create(createToolDto, [])

			expect(result).toEqual(mockTool)
			expect(service.create).toHaveBeenCalledWith(createToolDto, [])
		})
	})

	describe('Edge cases', () => {
		it('should handle tool with minimal required fields', async () => {
			const minimalDto: CreateToolDto = {
				name: 'Минимальный инструмент',
				tool_id: 'T999'
			}

			const minimalTool = {
				id: 10,
				name: minimalDto.name,
				tool_id: minimalDto.tool_id,
				description: null,
				size: null,
				type: null,
				createdAt: new Date(),
				updatedAt: new Date(),
				files: []
			}

			mockToolsService.create.mockResolvedValue(minimalTool)

			const result = await controller.create(minimalDto)

			expect(result).toEqual(minimalTool)
			expect(result.description).toBeNull()
			expect(result.size).toBeNull()
			expect(result.type).toBeNull()
		})

		it('should handle large tool_id', async () => {
			const longIdDto: CreateToolDto = {
				name: 'Инструмент с длинным ID',
				tool_id: 'T-VERY-LONG-ID-12345678901234567890'
			}

			const toolWithLongId = {
				...mockTool,
				tool_id: longIdDto.tool_id
			}

			mockToolsService.create.mockResolvedValue(toolWithLongId)

			const result = await controller.create(longIdDto)

			expect(result.tool_id).toEqual(longIdDto.tool_id)
		})

		it('should handle special characters in tool name', async () => {
			const specialCharsDto: CreateToolDto = {
				name: 'Фреза "специальная" №1 (12мм) [новая]',
				tool_id: 'T-SPECIAL-001'
			}

			const toolWithSpecialChars = {
				...mockTool,
				name: specialCharsDto.name,
				tool_id: specialCharsDto.tool_id
			}

			mockToolsService.create.mockResolvedValue(toolWithSpecialChars)

			const result = await controller.create(specialCharsDto)

			expect(result.name).toEqual(specialCharsDto.name)
		})
	})
})
