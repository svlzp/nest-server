import { CreateToolDto } from './dto/create-tool.dto'
import { UpdateToolDto } from './dto/update-tool.dto'
import { ToolsService } from './tools.service'
import {
	CreateToolDocs,
	DeleteToolDocs,
	DeleteToolFileDocs,
	GetAllToolsDocs,
	GetToolByIdDocs,
	UpdateToolDocs
} from './tools.swagger'
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Patch,
	Post,
	UploadedFiles,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { FilesInterceptor } from '@nestjs/platform-express'
import { ApiTags } from '@nestjs/swagger'
import { UserRole } from '__generated__'
import { diskStorage } from 'multer'
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { Authorization } from '@/auth/decorators/auth.decorator'
import { AuthGuard } from '@/auth/guards/auth.guard'

@ApiTags('Tools')
@Controller('tools')
@UseGuards(AuthGuard)
export class ToolsController {
	constructor(private readonly toolsService: ToolsService) {}

	@CreateToolDocs()
	@Authorization(UserRole.ADMIN)
	@Post()
	@UseInterceptors(
		FilesInterceptor('files', 10, {
			storage: diskStorage({
				destination: './uploads',
				filename: (req, file, cb) => {
					const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`
					cb(null, uniqueName)
				}
			}),
			limits: {
				fileSize: 10 * 1024 * 1024 // 10MB
			},
			fileFilter: (req, file, cb) => {
				const allowedMimeTypes = [
					'image/jpeg',
					'image/png',
					'image/gif',
					'image/webp'
				]
				if (allowedMimeTypes.includes(file.mimetype)) {
					cb(null, true)
				} else {
					cb(
						new Error(
							'Недопустимый тип файла. Только изображения.'
						),
						false
					)
				}
			}
		})
	)
	public async create(
		@Body() dto: CreateToolDto,
		@UploadedFiles() files?: Express.Multer.File[]
	) {
		return this.toolsService.create(dto, files)
	}

	@GetAllToolsDocs()
	@Get()
	public async findAll() {
		return this.toolsService.findAll()
	}

	@GetToolByIdDocs()
	@Get(':id')
	public async findOne(@Param('id', ParseIntPipe) id: number) {
		return this.toolsService.findOne(id)
	}

	@UpdateToolDocs()
	@Authorization(UserRole.ADMIN)
	@Patch(':id')
	@UseInterceptors(
		FilesInterceptor('files', 10, {
			storage: diskStorage({
				destination: './uploads',
				filename: (req, file, cb) => {
					const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`
					cb(null, uniqueName)
				}
			}),
			limits: {
				fileSize: 10 * 1024 * 1024
			},
			fileFilter: (req, file, cb) => {
				const allowedMimeTypes = [
					'image/jpeg',
					'image/png',
					'image/gif',
					'image/webp'
				]
				if (allowedMimeTypes.includes(file.mimetype)) {
					cb(null, true)
				} else {
					cb(
						new Error(
							'Недопустимый тип файла. Только изображения.'
						),
						false
					)
				}
			}
		})
	)
	@Authorization(UserRole.ADMIN)
	public async update(
		@Param('id', ParseIntPipe) id: number,
		@Body() dto: UpdateToolDto,
		@UploadedFiles() files?: Express.Multer.File[]
	) {
		return this.toolsService.update(id, dto, files)
	}

	@DeleteToolDocs()
	@Authorization(UserRole.ADMIN)
	@Delete(':id')
	public async remove(@Param('id', ParseIntPipe) id: number) {
		return this.toolsService.remove(id)
	}

	@DeleteToolFileDocs()
	@Authorization(UserRole.ADMIN)
	@Delete(':id/files/:fileId')
	public async removeFile(
		@Param('id', ParseIntPipe) id: number,
		@Param('fileId', ParseIntPipe) fileId: number
	) {
		return this.toolsService.removeFile(id, fileId)
	}
}
