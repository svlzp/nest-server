import { CreateToolDto } from './dto/create-tool.dto'
import { UpdateToolDto } from './dto/update-tool.dto'
import {
	BadRequestException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { FileType } from '__generated__'
import { FilesService } from '@/files/files.service'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class ToolsService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly filesService: FilesService
	) {}

	public async create(dto: CreateToolDto, files?: Express.Multer.File[]) {
		const existing = await this.prisma.tools.findUnique({
			where: { tool_id: dto.tool_id }
		})

		if (existing) {
			throw new BadRequestException(
				`Инструмент с ID ${dto.tool_id} уже существует`
			)
		}

		const tool = await this.prisma.tools.create({
			data: {
				name: dto.name,
				tool_id: dto.tool_id,
				description: dto.description,
				size: dto.size,
				type: dto.type
			}
		})

		if (files && files.length > 0) {
			for (const file of files) {
				await this.filesService.uploadFile(file, {
					type: FileType.IMAGE,
					toolId: tool.id
				})
			}
		}

		return this.findOne(tool.id)
	}

	public async findAll() {
		return this.prisma.tools.findMany({
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
	}

	public async findOne(id: number) {
		const tool = await this.prisma.tools.findUnique({
			where: { id },
			include: {
				files: {
					orderBy: {
						createdAt: 'asc'
					}
				}
			}
		})

		if (!tool) {
			throw new NotFoundException(`Инструмент с ID ${id} не найден`)
		}

		return tool
	}

	public async update(
		id: number,
		dto: UpdateToolDto,
		files?: Express.Multer.File[]
	) {
		await this.findOne(id)

		if (dto.tool_id) {
			const existing = await this.prisma.tools.findUnique({
				where: { tool_id: dto.tool_id }
			})

			if (existing && existing.id !== id) {
				throw new BadRequestException(
					`Инструмент с ID ${dto.tool_id} уже существует`
				)
			}
		}

		await this.prisma.tools.update({
			where: { id },
			data: {
				name: dto.name,
				tool_id: dto.tool_id,
				description: dto.description,
				size: dto.size,
				type: dto.type
			}
		})

		if (files && files.length > 0) {
			for (const file of files) {
				await this.filesService.uploadFile(file, {
					type: FileType.IMAGE,
					toolId: id
				})
			}
		}

		return this.findOne(id)
	}

	public async remove(id: number) {
		await this.findOne(id)

		await this.prisma.tools.delete({
			where: { id }
		})

		return { message: `Инструмент с ID ${id} успешно удален` }
	}

	public async removeFile(toolId: number, fileId: number) {
		const file = await this.filesService.getFile(fileId)

		if (file.toolId !== toolId) {
			throw new BadRequestException(
				'Файл не принадлежит данному инструменту'
			)
		}

		return this.filesService.deleteFile(fileId)
	}
}
