import { CreateLearningDto, UpdateLearningDto } from './dto/learning.dto'
import { LearningController } from './learning.controller'
import { LearningService } from './learning.service'
import { Test, TestingModule } from '@nestjs/testing'
import { AuthGuard } from '@/auth/guards/auth.guard'
import { JwtAuthGuard } from '@/auth/guards/jwt.guard'
import { RolesGuard } from '@/auth/guards/roles.guard'

describe('LearningController', () => {
	let controller: LearningController
	let service: LearningService

	const mockService = {
		getAllLearnings: jest.fn(),
		createLearning: jest.fn(),
		updateLearning: jest.fn(),
		deleteLearning: jest.fn()
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [LearningController],
			providers: [
				{
					provide: LearningService,
					useValue: mockService
				}
			]
		})
			.overrideGuard(AuthGuard)
			.useValue({ canActivate: () => true })
			.overrideGuard(JwtAuthGuard)
			.useValue({ canActivate: () => true })
			.overrideGuard(RolesGuard)
			.useValue({ canActivate: () => true })
			.compile()

		controller = module.get<LearningController>(LearningController)
		service = module.get<LearningService>(LearningService)
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
		expect(service).toBeDefined()
	})

	describe('getAllLearnings', () => {
		it('should return all learnings', async () => {
			const mockResult = [{ id: 1, title: 'Learning 1', content: [] }]
			mockService.getAllLearnings.mockResolvedValue(mockResult)

			const result = await controller.getAllLearnings()

			expect(result).toEqual(mockResult)
			expect(service.getAllLearnings).toHaveBeenCalled()
		})
	})

	describe('createLearning', () => {
		it('should create a new learning', async () => {
			const dto: CreateLearningDto = {
				title: 'New Learning',
				content: [{ description: 'Content 1' }]
			}
			const mockResult = {
				id: 1,
				title: 'New Learning',
				content: [{ id: 1, description: 'Content 1', files: [] }]
			}
			mockService.createLearning.mockResolvedValue(mockResult)

			const result = await controller.createLearning(dto)

			expect(result).toEqual(mockResult)
			expect(service.createLearning).toHaveBeenCalledWith(dto)
		})
	})

	describe('updateLearning', () => {
		it('should update a learning', async () => {
			const id = 1
			const dto: UpdateLearningDto = {
				id: 1,
				title: 'Updated Title'
			}
			const mockResult = {
				id: 1,
				title: 'Updated Title',
				content: []
			}
			mockService.updateLearning.mockResolvedValue(mockResult)

			const result = await controller.updateLearning(id, dto)

			expect(result).toEqual(mockResult)
			expect(service.updateLearning).toHaveBeenCalledWith(id, dto)
		})
	})

	describe('deleteLearning', () => {
		it('should delete a learning', async () => {
			const id = 1
			const mockResult = {
				id: 1,
				title: 'Deleted Learning',
				content: []
			}
			mockService.deleteLearning.mockResolvedValue(mockResult)

			const result = await controller.deleteLearning(id)

			expect(result).toEqual(mockResult)
			expect(service.deleteLearning).toHaveBeenCalledWith(id)
		})
	})
})
