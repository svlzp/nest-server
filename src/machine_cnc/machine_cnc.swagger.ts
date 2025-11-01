import { applyDecorators } from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiBody,
	ApiConsumes,
	ApiOperation,
	ApiParam,
	ApiResponse
} from '@nestjs/swagger'

export function CreateMachineDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Создать новый станок',
			description:
				'Создает новый станок ЧПУ с названием, описанием и опциональными фотографиями (до 10 файлов)'
		}),
		ApiConsumes('multipart/form-data'),
		ApiBody({
			description: 'Данные для создания станка с файлами',
			schema: {
				type: 'object',
				required: ['name'],
				properties: {
					name: {
						type: 'string',
						description: 'Название станка',
						example: 'ЧПУ фрезер HAAS VF-2'
					},
					description: {
						type: 'string',
						description: 'Описание станка',
						example: 'Вертикальный обрабатывающий центр с 3 осями'
					},
					files: {
						type: 'array',
						items: {
							type: 'string',
							format: 'binary'
						},
						description:
							'Фотографии станка (макс. 10 файлов по 10MB)'
					}
				}
			}
		}),
		ApiResponse({
			status: 201,
			description: 'Станок успешно создан с файлами'
		}),
		ApiResponse({
			status: 400,
			description: 'Неверные данные'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Доступ запрещен (только для ADMIN)'
		}),
		ApiResponse({
			status: 409,
			description: 'Станок с таким именем уже существует'
		})
	)
}

export function GetAllMachinesDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получить все станки',
			description:
				'Возвращает список всех станков с файлами и связанными работами'
		}),
		ApiResponse({
			status: 200,
			description: 'Список станков',
			schema: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						id: { type: 'number' },
						name: { type: 'string' },
						description: { type: 'string', nullable: true },
						files: {
							type: 'array',
							items: { type: 'object' }
						},
						workOvernights: {
							type: 'array',
							items: { type: 'object' }
						},
						createdAt: { type: 'string', format: 'date-time' },
						updatedAt: { type: 'string', format: 'date-time' }
					}
				}
			}
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' })
	)
}

export function GetMachineByIdDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получить станок по ID',
			description:
				'Возвращает информацию о конкретном станке с файлами, работами и этапами'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID станка',
			example: 1
		}),
		ApiResponse({
			status: 200,
			description: 'Данные станка',
			schema: {
				type: 'object',
				properties: {
					id: { type: 'number' },
					name: { type: 'string' },
					description: { type: 'string', nullable: true },
					files: {
						type: 'array',
						items: { type: 'object' }
					},
					workOvernights: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'number' },
								name: { type: 'string' },
								stages: {
									type: 'array',
									items: { type: 'object' }
								}
							}
						}
					},
					createdAt: { type: 'string', format: 'date-time' },
					updatedAt: { type: 'string', format: 'date-time' }
				}
			}
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 404, description: 'Станок не найден' })
	)
}

export function UpdateMachineDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Обновить данные станка',
			description:
				'Обновляет название, описание и/или добавляет новые фотографии станка'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID станка',
			example: 1
		}),
		ApiConsumes('multipart/form-data'),
		ApiBody({
			description: 'Данные для обновления станка с файлами',
			schema: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
						description: 'Новое название станка',
						example: 'ЧПУ фрезер HAAS VF-3'
					},
					description: {
						type: 'string',
						description: 'Новое описание станка',
						example: 'Обновленное описание'
					},
					files: {
						type: 'array',
						items: {
							type: 'string',
							format: 'binary'
						},
						description: 'Новые фотографии станка (макс. 10 файлов)'
					}
				}
			}
		}),
		ApiResponse({
			status: 200,
			description: 'Станок успешно обновлен'
		}),
		ApiResponse({ status: 400, description: 'Неверные данные' }),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Доступ запрещен (только для ADMIN)'
		}),
		ApiResponse({ status: 404, description: 'Станок не найден' }),
		ApiResponse({
			status: 409,
			description: 'Станок с таким именем уже существует'
		})
	)
}

export function DeleteMachineDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Удалить станок',
			description:
				'Удаляет станок из базы данных (каскадно удаляются связанные файлы и работы)'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID станка',
			example: 1
		}),
		ApiResponse({
			status: 200,
			description: 'Станок успешно удален',
			schema: {
				type: 'object',
				properties: {
					message: {
						type: 'string',
						example: 'Станок успешно удален'
					}
				}
			}
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Доступ запрещен (только для ADMIN)'
		}),
		ApiResponse({ status: 404, description: 'Станок не найден' })
	)
}

export function DeleteMachineFileDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Удалить файл станка',
			description: 'Удаляет конкретный файл (фото) станка'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID станка',
			example: 1
		}),
		ApiParam({
			name: 'fileId',
			type: 'number',
			description: 'ID файла',
			example: 5
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
		ApiResponse({
			status: 404,
			description: 'Файл не найден или не принадлежит станку'
		})
	)
}
