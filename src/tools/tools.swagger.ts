import { applyDecorators } from '@nestjs/common'
import {
	ApiBody,
	ApiConsumes,
	ApiOperation,
	ApiParam,
	ApiResponse,
	ApiBearerAuth
} from '@nestjs/swagger'

export function CreateToolDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({ summary: 'Создание инструмента с изображениями' }),
		ApiConsumes('multipart/form-data'),
		ApiBody({
			description: 'Данные инструмента и файлы изображений',
			schema: {
				type: 'object',
				required: ['name', 'tool_id'],
				properties: {
					name: { type: 'string', example: 'Фреза концевая' },
					tool_id: { type: 'string', example: 'T001' },
					description: {
						type: 'string',
						example: 'Концевая фреза 12мм'
					},
					size: { type: 'string', example: '12mm' },
					type: { type: 'string', example: 'Фреза' },
					files: {
						type: 'array',
						items: { type: 'string', format: 'binary' },
						description:
							'Массив изображений (до 10 файлов, макс. 10MB каждый)'
					}
				}
			}
		}),
		ApiResponse({ status: 201, description: 'Инструмент успешно создан' }),
		ApiResponse({
			status: 400,
			description: 'Неверные данные или tool_id уже существует'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Недостаточно прав (требуется ADMIN)'
		})
	)
}

export function GetAllToolsDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({ summary: 'Получение всех инструментов' }),
		ApiResponse({
			status: 200,
			description: 'Список всех инструментов с файлами'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' })
	)
}

export function GetToolByIdDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({ summary: 'Получение инструмента по ID' }),
		ApiParam({ name: 'id', description: 'ID инструмента', example: 1 }),
		ApiResponse({ status: 200, description: 'Инструмент найден' }),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 404, description: 'Инструмент не найден' })
	)
}

export function UpdateToolDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({ summary: 'Обновление инструмента' }),
		ApiParam({ name: 'id', description: 'ID инструмента', example: 1 }),
		ApiConsumes('multipart/form-data'),
		ApiBody({
			description: 'Обновляемые данные и дополнительные изображения',
			schema: {
				type: 'object',
				properties: {
					name: {
						type: 'string',
						example: 'Фреза концевая обновленная'
					},
					tool_id: { type: 'string', example: 'T001' },
					description: {
						type: 'string',
						example: 'Обновленное описание'
					},
					size: { type: 'string', example: '12mm' },
					type: { type: 'string', example: 'Фреза' },
					files: {
						type: 'array',
						items: { type: 'string', format: 'binary' },
						description: 'Дополнительные изображения'
					}
				}
			}
		}),
		ApiResponse({
			status: 200,
			description: 'Инструмент успешно обновлен'
		}),
		ApiResponse({
			status: 400,
			description: 'Неверные данные или tool_id уже существует'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 403, description: 'Недостаточно прав' }),
		ApiResponse({ status: 404, description: 'Инструмент не найден' })
	)
}

export function DeleteToolDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({ summary: 'Удаление инструмента' }),
		ApiParam({ name: 'id', description: 'ID инструмента', example: 1 }),
		ApiResponse({
			status: 200,
			description:
				'Инструмент успешно удален (файлы удаляются автоматически)'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 403, description: 'Недостаточно прав' }),
		ApiResponse({ status: 404, description: 'Инструмент не найден' })
	)
}

export function DeleteToolFileDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({ summary: 'Удаление конкретного файла инструмента' }),
		ApiParam({ name: 'id', description: 'ID инструмента', example: 1 }),
		ApiParam({ name: 'fileId', description: 'ID файла', example: 5 }),
		ApiResponse({ status: 200, description: 'Файл успешно удален' }),
		ApiResponse({
			status: 400,
			description: 'Файл не принадлежит данному инструменту'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 403, description: 'Недостаточно прав' }),
		ApiResponse({ status: 404, description: 'Файл не найден' })
	)
}
