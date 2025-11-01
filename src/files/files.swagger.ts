import { applyDecorators } from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiBody,
	ApiConsumes,
	ApiOperation,
	ApiParam,
	ApiQuery,
	ApiResponse
} from '@nestjs/swagger'

export function UploadFileDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Загрузка файла (изображения или видео)',
			description:
				'Загружает файл и привязывает его к инструменту, станку, работе или этапу'
		}),
		ApiConsumes('multipart/form-data'),
		ApiBody({
			description: 'Файл и данные для привязки',
			schema: {
				type: 'object',
				required: ['file', 'type'],
				properties: {
					file: {
						type: 'string',
						format: 'binary',
						description: 'Файл (изображение или видео, макс. 100MB)'
					},
					type: {
						type: 'string',
						enum: ['IMAGE', 'VIDEO'],
						description: 'Тип файла'
					},
					toolId: {
						type: 'number',
						description: 'ID инструмента (опционально)',
						example: 1
					},
					machineId: {
						type: 'number',
						description: 'ID станка (опционально)',
						example: 1
					},
					workId: {
						type: 'number',
						description: 'ID работы (опционально)',
						example: 1
					},
					stageId: {
						type: 'number',
						description: 'ID этапа работы (опционально)',
						example: 1
					}
				}
			}
		}),
		ApiResponse({
			status: 201,
			description: 'Файл успешно загружен и сохранен'
		}),
		ApiResponse({
			status: 400,
			description:
				'Файл не предоставлен или не указана связь (toolId, machineId, workId, stageId)'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Доступ запрещен (только для ADMIN)'
		})
	)
}

export function GetFileDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получить файл по ID',
			description:
				'Возвращает файл в виде потока с правильным Content-Type'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID файла',
			example: 1
		}),
		ApiResponse({
			status: 200,
			description: 'Файл успешно получен',
			content: {
				'image/jpeg': { schema: { type: 'string', format: 'binary' } },
				'image/png': { schema: { type: 'string', format: 'binary' } },
				'video/mp4': { schema: { type: 'string', format: 'binary' } }
			}
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 404, description: 'Файл не найден' })
	)
}

export function DeleteFileDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Удалить файл',
			description: 'Удаляет файл из базы данных и с диска'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID файла',
			example: 1
		}),
		ApiResponse({
			status: 200,
			description: 'Файл успешно удален',
			schema: {
				type: 'object',
				properties: {
					message: {
						type: 'string',
						example: 'Файл успешно удален'
					}
				}
			}
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Доступ запрещен (только для ADMIN)'
		}),
		ApiResponse({ status: 404, description: 'Файл не найден' })
	)
}

export function GetFilesByEntityDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получить файлы с фильтрацией',
			description:
				'Возвращает список файлов с фильтрацией по инструменту, станку, работе или этапу'
		}),
		ApiQuery({
			name: 'toolId',
			type: 'number',
			required: false,
			description: 'Фильтр по ID инструмента',
			example: 1
		}),
		ApiQuery({
			name: 'machineId',
			type: 'number',
			required: false,
			description: 'Фильтр по ID станка',
			example: 1
		}),
		ApiQuery({
			name: 'workId',
			type: 'number',
			required: false,
			description: 'Фильтр по ID работы',
			example: 1
		}),
		ApiQuery({
			name: 'stageId',
			type: 'number',
			required: false,
			description: 'Фильтр по ID этапа работы',
			example: 1
		}),
		ApiResponse({
			status: 200,
			description: 'Список файлов',
			schema: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						id: { type: 'number' },
						filename: { type: 'string' },
						originalName: { type: 'string' },
						mimeType: { type: 'string' },
						size: { type: 'number' },
						path: { type: 'string' },
						type: { type: 'string', enum: ['IMAGE', 'VIDEO'] },
						toolId: { type: 'number', nullable: true },
						machineId: { type: 'number', nullable: true },
						workId: { type: 'number', nullable: true },
						stageId: { type: 'number', nullable: true },
						uploadedAt: { type: 'string', format: 'date-time' }
					}
				}
			}
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' })
	)
}
