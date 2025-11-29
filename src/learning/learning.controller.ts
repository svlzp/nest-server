import { CreateLearningDto, UpdateLearningDto } from './dto/learning.dto'
import { LearningService } from './learning.service'
import {
	CreateLearningDocs,
	DeleteLearningDocs,
	GetAllLearningsDocs,
	UpdateLearningDocs
} from './learning.swagger'
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	UseGuards
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserRole } from '__generated__'
import { JwtAuthorization } from '@/auth'
import { Authorization } from '@/auth/decorators/auth.decorator'
import { AuthGuard } from '@/auth/guards/auth.guard'

@Controller('learning')
@ApiTags('Learning')
@UseGuards(AuthGuard)
export class LearningController {
	constructor(private readonly learningService: LearningService) {}

	@GetAllLearningsDocs()
	@Get()
	async getAllLearnings() {
		return this.learningService.getAllLearnings()
	}

	@DeleteLearningDocs()
	@JwtAuthorization(UserRole.ADMIN)
	@Authorization(UserRole.ADMIN)
	@Delete(':id')
	async deleteLearning(@Param('id', ParseIntPipe) id: number) {
		return this.learningService.deleteLearning(id)
	}

	@CreateLearningDocs()
	@Post()
	@Authorization(UserRole.ADMIN)
	@JwtAuthorization(UserRole.ADMIN)
	async createLearning(@Body() dto: CreateLearningDto) {
		return this.learningService.createLearning(dto)
	}

	@UpdateLearningDocs()
	@Patch(':id')
	@Authorization(UserRole.ADMIN)
	@JwtAuthorization(UserRole.ADMIN)
	async updateLearning(
		@Param('id', ParseIntPipe) id: number,
		@Body() dto: UpdateLearningDto
	) {
		return this.learningService.updateLearning(id, dto)
	}
}
