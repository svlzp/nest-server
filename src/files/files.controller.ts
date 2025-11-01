import { UploadFileDto } from './dto/upload-file.dto'
import { FilesService } from './files.service'
import {
	DeleteFileDocs,
	GetFileDocs,
	GetFilesByEntityDocs,
	UploadFileDocs
} from './files.swagger'
import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Query,
	Res,
	UploadedFile,
	UseGuards,
	UseInterceptors
} from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiTags } from '@nestjs/swagger'
import { UserRole } from '__generated__'
import { Response } from 'express'
import { diskStorage } from 'multer'
import * as path from 'path'
import { v4 as uuidv4 } from 'uuid'
import { Authorization } from '@/auth/decorators/auth.decorator'
import { AuthGuard } from '@/auth/guards/auth.guard'

@ApiTags('Files')
@Controller('files')
@UseGuards(AuthGuard)
export class FilesController {
	constructor(private readonly filesService: FilesService) {}

	@UploadFileDocs()
	@Authorization(UserRole.ADMIN)
	@Post('upload')
	@UseInterceptors(
		FileInterceptor('file', {
			storage: diskStorage({
				destination: './uploads',
				filename: (req, file, cb) => {
					const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`
					cb(null, uniqueName)
				}
			}),
			limits: {
				fileSize: 100 * 1024 * 1024 // 100MB
			},
			fileFilter: (req, file, cb) => {
				const allowedMimeTypes = [
					'image/jpeg',
					'image/png',
					'image/gif',
					'image/webp',
					'video/mp4',
					'video/webm',
					'video/quicktime'
				]
				if (allowedMimeTypes.includes(file.mimetype)) {
					cb(null, true)
				} else {
					cb(new Error('Недопустимый тип файла'), false)
				}
			}
		})
	)
	public async uploadFile(
		@UploadedFile() file: Express.Multer.File,
		@Body() dto: UploadFileDto
	) {
		return this.filesService.uploadFile(file, dto)
	}

	@GetFileDocs()
	@Get(':id')
	public async getFile(
		@Param('id', ParseIntPipe) id: number,
		@Res() res: Response
	) {
		const file = await this.filesService.getFile(id)
		res.setHeader('Content-Type', file.mimeType)
		res.setHeader(
			'Content-Disposition',
			`inline; filename="${file.originalName}"`
		)
		res.sendFile(file.path, { root: '.' })
	}

	@DeleteFileDocs()
	@Authorization(UserRole.ADMIN)
	@Delete(':id')
	public async deleteFile(@Param('id', ParseIntPipe) id: number) {
		return this.filesService.deleteFile(id)
	}

	@GetFilesByEntityDocs()
	@Get()
	public async getFilesByEntity(
		@Query('toolId', new ParseIntPipe({ optional: true })) toolId?: number,
		@Query('machineId', new ParseIntPipe({ optional: true }))
		machineId?: number,
		@Query('workId', new ParseIntPipe({ optional: true })) workId?: number,
		@Query('stageId', new ParseIntPipe({ optional: true })) stageId?: number
	): Promise<unknown> {
		return this.filesService.getFilesByEntity(
			toolId,
			machineId,
			workId,
			stageId
		)
	}
}
