import { CreateWorkDto } from './dto/create-work.dto'
import { UpdateQuantityDto } from './dto/update-quantity.dto'
import { UpdateWorkDto } from './dto/update-work.dto'
import { WorkOvernightService } from './work_overnight.service'
import {
	CreateWorkDocs,
	DeleteWorkDocs,
	GetAllWorksDocs,
	GetArchivedWorksDocs,
	GetWorkByIdDocs,
	GetWorkByRtDocs,
	UpdateQuantityDocs,
	UpdateWorkDocs
} from './work_overnight.swagger'
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseBoolPipe,
	ParseIntPipe,
	Patch,
	Post,
	Query,
	UseGuards
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserRole } from '__generated__'
import { Authorization } from '@/auth/decorators/auth.decorator'
import { JwtAuthorization } from '@/auth/decorators/jwt-auth.decorator'
import { AuthGuard } from '@/auth/guards/auth.guard'

@ApiTags('Work Overnight')
@Controller('work-overnight')
@UseGuards(AuthGuard)
export class WorkOvernightController {
	constructor(private readonly workOvernightService: WorkOvernightService) {}

	@CreateWorkDocs()
	@Authorization(UserRole.ADMIN)
	@JwtAuthorization(UserRole.ADMIN)
	@Post()
	create(@Body() createWorkDto: CreateWorkDto) {
		return this.workOvernightService.create(createWorkDto)
	}

	@GetAllWorksDocs()
	@Get()
	findAll(
		@Query('includeArchived', new ParseBoolPipe({ optional: true }))
		includeArchived?: boolean
	) {
		return this.workOvernightService.findAll(includeArchived)
	}

	@GetArchivedWorksDocs()
	@Get('archived')
	findArchived() {
		return this.workOvernightService.findArchived()
	}

	@GetWorkByIdDocs()
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.workOvernightService.findOne(id)
	}

	@GetWorkByRtDocs()
	@Get('rt/:rt')
	findByRt(@Param('rt') rt: string) {
		return this.workOvernightService.findByRt(rt)
	}

	@UpdateWorkDocs()
	@Authorization(UserRole.ADMIN)
	@JwtAuthorization(UserRole.ADMIN)
	@Patch(':id')
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateWorkDto: UpdateWorkDto
	) {
		return this.workOvernightService.update(id, updateWorkDto)
	}

	@UpdateQuantityDocs()
	@Authorization()
	@JwtAuthorization()
	@Patch('quantity/update')
	updateQuantity(@Body() updateQuantityDto: UpdateQuantityDto) {
		return this.workOvernightService.updateQuantityByRt(updateQuantityDto)
	}

	@DeleteWorkDocs()
	@Authorization(UserRole.ADMIN)
	@JwtAuthorization(UserRole.ADMIN)
	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.workOvernightService.remove(id)
	}
}
