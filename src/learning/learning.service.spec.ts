import {
	CreateLearningDto,
	UpdateLearningDto,
	UpdateContentLearningDto
} from './dto/learning.dto'
import { LearningService } from './learning.service'
import { Test, TestingModule } from '@nestjs/testing'
import { FilesService } from '@/files/files.service'
import { PrismaService } from '@/prisma/prisma.service'

describe('LearningService', () => {
	let service: LearningService
	let prismaService: PrismaService
	let filesService: FilesService

	const mockPrismaService = {
		learning: {
			create: jest.fn(),
			update: jest.fn(),
			findMany: jest.fn(),
			delete: jest.fn()
		},
		contentLearning: {
			update: jest.fn(),
			updateMany: jest.fn(),
			deleteMany: jest.fn(),
			create: jest.fn()
		}
	}

	const mockFilesService = {
		uploadFile: jest.fn(),
		deleteFile: jest.fn()
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				LearningService,
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

		service = module.get<LearningService>(LearningService)
		prismaService = module.get<PrismaService>(PrismaService)
		filesService = module.get<FilesService>(FilesService)

		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	describe('createLearning', () => {
		it('should create learning without files', async () => {
			const dto: CreateLearningDto = {
				title: 'Test Learning',
				content: [
					{ description: 'Content 1' },
					{ description: 'Content 2' }
				]
			}

			const expectedResult = {
				id: 1,
				title: 'Test Learning',
				content: [
					{ id: 1, description: 'Content 1', files: [] },
					{ id: 2, description: 'Content 2', files: [] }
				],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.learning.create.mockResolvedValue(expectedResult)

			const result = await service.createLearning(dto)

			expect(result).toEqual(expectedResult)
			expect(filesService.uploadFile).not.toHaveBeenCalled()
		})
	})

	describe('updateLearning', () => {
		it('should update learning title only', async () => {
			const dto: UpdateLearningDto = {
				id: 1,
				title: 'Updated Title'
			}

			const expectedResult = {
				id: 1,
				title: 'Updated Title',
				content: [],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.learning.update.mockResolvedValue(expectedResult)

			const result = await service.updateLearning(1, dto)

			expect(result).toEqual(expectedResult)
		})

		it('should remove specific files from learning', async () => {
			const dto: UpdateLearningDto = {
				id: 1,
				removeFileIds: [1, 2]
			}

			mockFilesService.deleteFile.mockResolvedValue(undefined)

			const expectedResult = {
				id: 1,
				title: 'Learning',
				content: [],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.learning.update.mockResolvedValue(expectedResult)

			const result = await service.updateLearning(1, dto)

			expect(result).toEqual(expectedResult)
			expect(filesService.deleteFile).toHaveBeenCalledTimes(2)
		})

		it('should delete specific content items', async () => {
			const dto: UpdateLearningDto = {
				id: 1,
				removeContentIds: [2, 3]
			}

			mockPrismaService.contentLearning.deleteMany.mockResolvedValue({
				count: 2
			})

			const expectedResult = {
				id: 1,
				title: 'Learning',
				content: [{ id: 1, description: 'Remaining', files: [] }],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.learning.update.mockResolvedValue(expectedResult)

			const result = await service.updateLearning(1, dto)

			expect(result).toEqual(expectedResult)
			expect(
				prismaService.contentLearning.deleteMany
			).toHaveBeenCalledWith({
				where: {
					id: { in: [2, 3] },
					learningId: 1
				}
			})
		})

		it('should update existing content description', async () => {
			const dto: UpdateLearningDto = {
				id: 1,
				content: [
					{
						id: 1,
						description: 'Updated description',
						keepFileIds: [1, 2]
					} as UpdateContentLearningDto
				]
			}

			mockPrismaService.contentLearning.update.mockResolvedValue({})

			const expectedResult = {
				id: 1,
				title: 'Learning',
				content: [
					{
						id: 1,
						description: 'Updated description',
						files: [{ id: 1 }, { id: 2 }]
					}
				],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.learning.update.mockResolvedValue(expectedResult)

			const result = await service.updateLearning(1, dto)

			expect(result).toEqual(expectedResult)
			expect(prismaService.contentLearning.update).toHaveBeenCalled()
		})

		it('should create new content', async () => {
			const dto: UpdateLearningDto = {
				id: 1,
				content: [
					{
						description: 'New content'
					} as UpdateContentLearningDto
				]
			}

			mockPrismaService.contentLearning.create.mockResolvedValue({
				id: 2
			})

			const expectedResult = {
				id: 1,
				title: 'Learning',
				content: [{ id: 2, description: 'New content', files: [] }],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.learning.update.mockResolvedValue(expectedResult)

			const result = await service.updateLearning(1, dto)

			expect(result).toEqual(expectedResult)
			expect(prismaService.contentLearning.create).toHaveBeenCalledWith({
				data: expect.objectContaining({
					description: 'New content',
					learningId: 1
				})
			})
		})

		it('should remove specific files from content', async () => {
			const dto: UpdateLearningDto = {
				id: 1,
				content: [
					{
						id: 1,
						description: 'Content',
						removeFileIds: [2],
						keepFileIds: [1]
					} as UpdateContentLearningDto
				]
			}

			mockPrismaService.contentLearning.update.mockResolvedValue({})

			const expectedResult = {
				id: 1,
				title: 'Learning',
				content: [
					{
						id: 1,
						description: 'Content',
						files: [{ id: 1 }]
					}
				],
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.learning.update.mockResolvedValue(expectedResult)

			const result = await service.updateLearning(1, dto)

			expect(result).toEqual(expectedResult)
			expect(prismaService.contentLearning.update).toHaveBeenCalledWith(
				expect.objectContaining({
					where: { id: 1 },
					data: expect.objectContaining({
						files: {
							disconnect: [{ id: 2 }]
						}
					})
				})
			)
		})
	})

	describe('getAllLearnings', () => {
		it('should return all learnings', async () => {
			const expectedResult = [
				{
					id: 1,
					title: 'Learning 1',
					content: [],
					createdAt: new Date(),
					updatedAt: new Date()
				}
			]

			mockPrismaService.learning.findMany.mockResolvedValue(
				expectedResult
			)

			const result = await service.getAllLearnings()

			expect(result).toEqual(expectedResult)
		})
	})

	describe('deleteLearning', () => {
		it('should delete learning by id', async () => {
			const expectedResult = {
				id: 1,
				title: 'Deleted Learning',
				createdAt: new Date(),
				updatedAt: new Date()
			}

			mockPrismaService.learning.delete.mockResolvedValue(expectedResult)

			const result = await service.deleteLearning(1)

			expect(result).toEqual(expectedResult)
		})
	})
})
