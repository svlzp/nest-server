import { UploadFileDto } from './dto/upload-file.dto'
import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as fs from 'fs'
import * as path from 'path'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class FilesService {
	private uploadPath: string

	constructor(
		private readonly prisma: PrismaService,
		private readonly configService: ConfigService
	) {
		this.uploadPath = path.join(process.cwd(), 'uploads')
		this.ensureUploadDir()
	}

	private ensureUploadDir() {
		if (!fs.existsSync(this.uploadPath)) {
			fs.mkdirSync(this.uploadPath, { recursive: true })
		}
	}

	public async uploadFile(file: Express.Multer.File, dto: UploadFileDto) {
		if (!file) {
			throw new BadRequestException('Файл не предоставлен')
		}

		const hasRelation =
			dto.toolId || dto.machineId || dto.workId || dto.stageId
		if (!hasRelation) {
			throw new BadRequestException(
				'Необходимо указать хотя бы одну связь (toolId, machineId, workId, stageId)'
			)
		}

		return await this.prisma.fileUpload.create({
			data: {
				filename: file.filename,
				originalName: file.originalname,
				path: file.path,
				mimeType: file.mimetype,
				size: file.size,
				type: dto.type,
				toolId: dto.toolId,
				machineId: dto.machineId,
				workId: dto.workId,
				stageId: dto.stageId
			}
		})
	}

	public async getFile(id: number) {
		const file = await this.prisma.fileUpload.findUnique({
			where: { id }
		})

		if (!file) {
			throw new NotFoundException('Файл не найден')
		}

		if (!fs.existsSync(file.path)) {
			throw new NotFoundException('Файл не найден на диске')
		}

		return file
	}

	public async deleteFile(id: number) {
		const file = await this.getFile(id)

		if (fs.existsSync(file.path)) {
			fs.unlinkSync(file.path)
		}

		await this.prisma.fileUpload.delete({
			where: { id }
		})

		return { message: 'Файл успешно удален' }
	}

	public async getFilesByEntity(
		toolId?: number,
		machineId?: number,
		workId?: number,
		stageId?: number
	) {
		return this.prisma.fileUpload.findMany({
			where: {
				toolId,
				machineId,
				workId,
				stageId
			},
			orderBy: {
				createdAt: 'desc'
			}
		})
	}
}
