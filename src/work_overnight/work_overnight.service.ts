import { CreateWorkDto } from './dto/create-work.dto'
import { UpdateQuantityDto } from './dto/update-quantity.dto'
import { UpdateWorkDto } from './dto/update-work.dto'
import {
	ConflictException,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class WorkOvernightService {
	constructor(private readonly prisma: PrismaService) {}

	async create(createWorkDto: CreateWorkDto) {
		const existingWork = await this.prisma.workOvernight.findUnique({
			where: { rt: createWorkDto.rt }
		})

		if (existingWork) {
			throw new ConflictException('Работа с таким RT уже существует')
		}

		const machine = await this.prisma.machine_cnc.findUnique({
			where: { id: createWorkDto.machineId }
		})

		if (!machine) {
			throw new NotFoundException('Станок не найден')
		}

		const work = await this.prisma.workOvernight.create({
			data: {
				name: createWorkDto.name,
				rt: createWorkDto.rt,
				quantity: createWorkDto.quantity,
				madeBy: createWorkDto.madeBy,
				leftToMake: createWorkDto.leftToMake,
				productionTime: createWorkDto.productionTime,
				machineId: createWorkDto.machineId,

				isArchived: createWorkDto.leftToMake === 0,
				archivedAt: createWorkDto.leftToMake === 0 ? new Date() : null
			},
			include: {
				machine: true,
				stages: true,
				files: true
			}
		})

		return work
	}

	async findAll(includeArchived = false) {
		return this.prisma.workOvernight.findMany({
			where: includeArchived ? {} : { isArchived: false },
			include: {
				machine: true,
				stages: {
					include: {
						files: true
					},
					orderBy: {
						stepNumber: 'asc'
					}
				},
				files: true
			},
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	async findArchived() {
		return this.prisma.workOvernight.findMany({
			where: { isArchived: true },
			include: {
				machine: true,
				stages: {
					include: {
						files: true
					},
					orderBy: {
						stepNumber: 'asc'
					}
				},
				files: true
			},
			orderBy: {
				archivedAt: 'desc'
			}
		})
	}

	async findOne(id: number) {
		const work = await this.prisma.workOvernight.findUnique({
			where: { id },
			include: {
				machine: true,
				stages: {
					include: {
						files: true
					},
					orderBy: {
						stepNumber: 'asc'
					}
				},
				files: true
			}
		})

		if (!work) {
			throw new NotFoundException('Работа не найдена')
		}

		return work
	}

	async findByRt(rt: string) {
		const work = await this.prisma.workOvernight.findUnique({
			where: { rt },
			include: {
				machine: true,
				stages: {
					include: {
						files: true
					},
					orderBy: {
						stepNumber: 'asc'
					}
				},
				files: true
			}
		})

		if (!work) {
			throw new NotFoundException('Работа с таким RT не найдена')
		}

		return work
	}

	async update(id: number, updateWorkDto: UpdateWorkDto) {
		await this.findOne(id)

		if (updateWorkDto.rt) {
			const existingWork = await this.prisma.workOvernight.findUnique({
				where: { rt: updateWorkDto.rt }
			})

			if (existingWork && existingWork.id !== id) {
				throw new ConflictException('Работа с таким RT уже существует')
			}
		}

		if (updateWorkDto.machineId) {
			const machine = await this.prisma.machine_cnc.findUnique({
				where: { id: updateWorkDto.machineId }
			})

			if (!machine) {
				throw new NotFoundException('Станок не найден')
			}
		}

		const shouldArchive =
			updateWorkDto.leftToMake !== undefined &&
			updateWorkDto.leftToMake === 0

		return this.prisma.workOvernight.update({
			where: { id },
			data: {
				...updateWorkDto,
				isArchived: shouldArchive ? true : undefined,
				archivedAt: shouldArchive ? new Date() : undefined
			},
			include: {
				machine: true,
				stages: true,
				files: true
			}
		})
	}

	async updateQuantityByRt(updateQuantityDto: UpdateQuantityDto) {
		const work = await this.prisma.workOvernight.findUnique({
			where: { rt: updateQuantityDto.rt }
		})

		if (!work) {
			throw new NotFoundException('Работа с таким RT не найдена')
		}

		const shouldArchive = updateQuantityDto.leftToMake === 0

		return this.prisma.workOvernight.update({
			where: { rt: updateQuantityDto.rt },
			data: {
				leftToMake: updateQuantityDto.leftToMake,
				isArchived: shouldArchive,
				archivedAt: shouldArchive ? new Date() : null
			},
			include: {
				machine: true,
				stages: true
			}
		})
	}

	async remove(id: number) {
		await this.findOne(id)

		await this.prisma.workOvernight.delete({
			where: { id }
		})

		return { message: 'Работа успешно удалена' }
	}

	@Cron(CronExpression.EVERY_DAY_AT_3AM) //delete every day at 3 am
	async cleanupArchivedWorks() {
		const sevenDaysAgo = new Date()
		sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

		const result = await this.prisma.workOvernight.deleteMany({
			where: {
				isArchived: true,
				archivedAt: {
					lte: sevenDaysAgo
				}
			}
		})

		console.log(
			`[Cleanup] Удалено ${result.count} архивных работ старше 7 дней`
		)

		return result
	}
}
