import { CreateMachineDto } from './dto/create-machine.dto'
import { UpdateMachineDto } from './dto/update-machine.dto'
import { MachineCncService } from './machine_cnc.service'
import {
	CreateMachineDocs,
	DeleteMachineDocs,
	DeleteMachineFileDocs,
	GetAllMachinesDocs,
	GetMachineByIdDocs,
	UpdateMachineDocs
} from './machine_cnc.swagger'
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

@ApiTags('Machine CNC')
@Controller('machine-cnc')
@UseGuards(AuthGuard)
export class MachineCncController {
	constructor(private readonly machineCncService: MachineCncService) {}

	@CreateMachineDocs()
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
					cb(new Error('Недопустимый тип файла'), false)
				}
			}
		})
	)
	create(
		@Body() createMachineDto: CreateMachineDto,
		@UploadedFiles() files?: Express.Multer.File[]
	) {
		return this.machineCncService.create(createMachineDto, files)
	}

	@GetAllMachinesDocs()
	@Get()
	findAll() {
		return this.machineCncService.findAll()
	}

	@GetMachineByIdDocs()
	@Get(':id')
	findOne(@Param('id', ParseIntPipe) id: number) {
		return this.machineCncService.findOne(id)
	}

	@UpdateMachineDocs()
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
					cb(new Error('Недопустимый тип файла'), false)
				}
			}
		})
	)
	update(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateMachineDto: UpdateMachineDto,
		@UploadedFiles() files?: Express.Multer.File[]
	) {
		return this.machineCncService.update(id, updateMachineDto, files)
	}

	@DeleteMachineDocs()
	@Authorization(UserRole.ADMIN)
	@Delete(':id')
	remove(@Param('id', ParseIntPipe) id: number) {
		return this.machineCncService.remove(id)
	}

	@DeleteMachineFileDocs()
	@Authorization(UserRole.ADMIN)
	@Delete(':id/files/:fileId')
	removeFile(
		@Param('id', ParseIntPipe) id: number,
		@Param('fileId', ParseIntPipe) fileId: number
	) {
		return this.machineCncService.removeFile(id, fileId)
	}
}
