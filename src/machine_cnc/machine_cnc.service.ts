import { CreateMachineDto } from './dto/create-machine.dto'
import { UpdateMachineDto } from './dto/update-machine.dto'
import {
	ConflictException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { FileType } from '__generated__'
import { FilesService } from '@/files/files.service'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class MachineCncService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly filesService: FilesService
	) {}

	async create(
		createMachineDto: CreateMachineDto,
		files?: Express.Multer.File[]
	) {
		const existingMachine = await this.prisma.machine_cnc.findFirst({
			where: { name: createMachineDto.name }
		})

		if (existingMachine) {
			throw new ConflictException('Станок с таким именем уже существует')
		}

		const machine = await this.prisma.machine_cnc.create({
			data: {
				name: createMachineDto.name,
				description: createMachineDto.description
			}
		})

		if (files && files.length > 0) {
			await Promise.all(
				files.map(file =>
					this.filesService.uploadFile(file, {
						type: FileType.IMAGE,
						machineId: machine.id
					})
				)
			)
		}

		return this.prisma.machine_cnc.findUnique({
			where: { id: machine.id },
			include: {
				files: true
			}
		})
	}

	async findAll() {
		return this.prisma.machine_cnc.findMany({
			include: {
				files: true,
				workOvernights: {
					include: {
						stages: true
					}
				}
			},
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async findOne(id: number) {
		const machine = await this.prisma.machine_cnc.findUnique({
			where: { id },
			include: {
				files: true,
				workOvernights: {
					include: {
						stages: {
							include: {
								files: true
							},
							orderBy: {
								stepNumber: 'asc'
							}
						}
					}
				}
			}
		})

		if (!machine) {
			throw new NotFoundException('Станок не найден')
		}

		return machine
	}

	async update(
		id: number,
		updateMachineDto: UpdateMachineDto,
		files?: Express.Multer.File[]
	) {
		await this.findOne(id)

		if (updateMachineDto.name) {
			const existingMachine = await this.prisma.machine_cnc.findFirst({
				where: {
					name: updateMachineDto.name,
					NOT: { id }
				}
			})

			if (existingMachine) {
				throw new ConflictException(
					'Станок с таким именем уже существует'
				)
			}
		}

		const machine = await this.prisma.machine_cnc.update({
			where: { id },
			data: {
				name: updateMachineDto.name,
				description: updateMachineDto.description
			}
		})

		if (files && files.length > 0) {
			await Promise.all(
				files.map(file =>
					this.filesService.uploadFile(file, {
						type: FileType.IMAGE,
						machineId: machine.id
					})
				)
			)
		}

		return this.prisma.machine_cnc.findUnique({
			where: { id },
			include: {
				files: true,
				workOvernights: true
			}
		})
	}

	async remove(id: number) {
		// Проверка существования станка
		await this.findOne(id)

		await this.prisma.machine_cnc.delete({
			where: { id }
		})

		return { message: 'Станок успешно удален' }
	}

	async removeFile(machineId: number, fileId: number) {
		await this.findOne(machineId)

		const file = await this.prisma.fileUpload.findUnique({
			where: { id: fileId }
		})

		if (!file || file.machineId !== machineId) {
			throw new NotFoundException(
				'Файл не найден или не принадлежит этому станку'
			)
		}

		return this.filesService.deleteFile(fileId)
	}
}
