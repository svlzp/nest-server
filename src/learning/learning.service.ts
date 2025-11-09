import { CreateLearningDto, UpdateLearningDto } from './dto/learning.dto'
import { Injectable } from '@nestjs/common'
import { FilesService } from '@/files/files.service'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class LearningService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly filesService: FilesService
	) {}

	public async createLearning(
		dto: CreateLearningDto,
		files?: Express.Multer.File[][]
	) {
		const learning = await this.prisma.learning.create({
			data: {
				title: dto.title,
				content: {
					create: await Promise.all(
						dto.content.map(async (item, index) => {
							const contentFiles = files?.[index] || []
							const uploadedFiles =
								contentFiles.length > 0
									? await Promise.all(
											contentFiles.map(file =>
												this.filesService.uploadFile(
													file,
													{
														type: 'IMAGE'
													}
												)
											)
										)
									: []

							return {
								description: item.description,
								files:
									uploadedFiles.length > 0
										? {
												connect: uploadedFiles.map(
													f => ({ id: f.id })
												)
											}
										: undefined
							}
						})
					)
				}
			},
			include: {
				content: {
					include: {
						files: true
					}
				}
			}
		})
		return learning
	}
	public async updateLearning(
		id: number,
		dto: UpdateLearningDto,
		files?: Express.Multer.File[][]
	) {
		const { content, removeFileIds, removeContentIds, ...rest } = dto

		if (removeFileIds && removeFileIds.length > 0) {
			for (const fileId of removeFileIds) {
				await this.filesService.deleteFile(fileId)
			}
		}

		if (removeContentIds && removeContentIds.length > 0) {
			await this.prisma.contentLearning.deleteMany({
				where: {
					id: { in: removeContentIds },
					learningId: id
				}
			})
		}

		if (content && content.length > 0) {
			const updates = await Promise.all(
				content.map(async (item, index) => {
					const contentFiles = files?.[index] || []

					const uploadedFiles =
						contentFiles.length > 0
							? await Promise.all(
									contentFiles.map(file =>
										this.filesService.uploadFile(file, {
											type: 'IMAGE'
										})
									)
								)
							: []

					if (item.id) {
						const updateData: any = {
							description: item.description
						}

						if (
							item.removeFileIds &&
							item.removeFileIds.length > 0
						) {
							await this.prisma.contentLearning.update({
								where: { id: item.id },
								data: {
									files: {
										disconnect: item.removeFileIds.map(
											fileId => ({ id: fileId })
										)
									}
								}
							})
						}

						if (uploadedFiles.length > 0) {
							updateData.files = {
								connect: uploadedFiles.map(f => ({ id: f.id }))
							}
						}

						if (item.keepFileIds && item.keepFileIds.length > 0) {
							if (!updateData.files) {
								updateData.files = {}
							}
							updateData.files.connect = [
								...(updateData.files.connect || []),
								...item.keepFileIds.map(fileId => ({
									id: fileId
								}))
							]
						}

						return { type: 'update', id: item.id, data: updateData }
					} else {
						return {
							type: 'create',
							data: {
								description: item.description,
								files:
									uploadedFiles.length > 0
										? {
												connect: uploadedFiles.map(
													f => ({
														id: f.id
													})
												)
											}
										: undefined
							}
						}
					}
				})
			)

			for (const update of updates) {
				if (update.type === 'update') {
					await this.prisma.contentLearning.update({
						where: { id: update.id },
						data: update.data
					})
				} else if (update.type === 'create') {
					await this.prisma.contentLearning.create({
						data: {
							...update.data,
							learningId: id
						}
					})
				}
			}
		}

		const learning = await this.prisma.learning.update({
			where: { id },
			data: rest,
			include: {
				content: {
					include: {
						files: true
					}
				}
			}
		})

		return learning
	}
	public async getAllLearnings() {
		return this.prisma.learning.findMany({
			include: {
				content: {
					include: {
						files: true
					}
				}
			}
		})
	}
	public async deleteLearning(id: number) {
		return this.prisma.learning.delete({
			where: { id }
		})
	}
}
