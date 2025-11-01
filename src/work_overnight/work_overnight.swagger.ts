import { CreateWorkDto } from './dto/create-work.dto'
import { UpdateQuantityDto } from './dto/update-quantity.dto'
import { UpdateWorkDto } from './dto/update-work.dto'
import { applyDecorators } from '@nestjs/common'
import {
	ApiBody,
	ApiOperation,
	ApiParam,
	ApiQuery,
	ApiResponse,
	ApiBearerAuth
} from '@nestjs/swagger'

export function CreateWorkDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Создать новую работу',
			description: 'Создает новую работу с привязкой к станку'
		}),
		ApiBody({
			type: CreateWorkDto,
			description: 'Данные для создания работы'
		}),
		ApiResponse({
			status: 201,
			description: 'Работа успешно создана'
		}),
		ApiResponse({ status: 400, description: 'Неверные данные' }),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Доступ запрещен (только для ADMIN)'
		}),
		ApiResponse({
			status: 409,
			description: 'Работа с таким RT уже существует'
		})
	)
}

export function GetAllWorksDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получить все работы',
			description:
				'Возвращает список работ с возможностью включения архивных'
		}),
		ApiQuery({
			name: 'includeArchived',
			type: 'boolean',
			required: false,
			description: 'Включить архивные работы',
			example: false
		}),
		ApiResponse({
			status: 200,
			description: 'Список работ'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' })
	)
}

export function GetArchivedWorksDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получить архивные работы',
			description: 'Возвращает только архивные работы (leftToMake = 0)'
		}),
		ApiResponse({
			status: 200,
			description: 'Список архивных работ'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' })
	)
}

export function GetWorkByIdDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получить работу по ID',
			description:
				'Возвращает информацию о конкретной работе со всеми этапами'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID работы',
			example: 1
		}),
		ApiResponse({
			status: 200,
			description: 'Данные работы'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 404, description: 'Работа не найдена' })
	)
}

export function GetWorkByRtDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получить работу по RT номеру',
			description: 'Возвращает работу по уникальному RT идентификатору'
		}),
		ApiParam({
			name: 'rt',
			type: 'string',
			description: 'RT номер',
			example: 'RT-2025-001'
		}),
		ApiResponse({
			status: 200,
			description: 'Данные работы'
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 404, description: 'Работа не найдена' })
	)
}

export function UpdateWorkDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Обновить данные работы',
			description: 'Обновляет информацию о работе (только для ADMIN)'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID работы',
			example: 1
		}),
		ApiBody({
			type: UpdateWorkDto,
			description: 'Данные для обновления работы'
		}),
		ApiResponse({
			status: 200,
			description: 'Работа успешно обновлена'
		}),
		ApiResponse({ status: 400, description: 'Неверные данные' }),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Доступ запрещен (только для ADMIN)'
		}),
		ApiResponse({ status: 404, description: 'Работа не найдена' }),
		ApiResponse({
			status: 409,
			description: 'Работа с новым RT уже существует'
		})
	)
}

export function UpdateQuantityDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Обновить количество деталей по RT',
			description:
				'Обновляет leftToMake по RT номеру (доступно всем авторизованным пользователям). При leftToMake=0 работа архивируется.'
		}),
		ApiBody({
			type: UpdateQuantityDto,
			description: 'RT и новое количество'
		}),
		ApiResponse({
			status: 200,
			description: 'Количество успешно обновлено'
		}),
		ApiResponse({ status: 400, description: 'Неверные данные' }),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({ status: 404, description: 'Работа не найдена' })
	)
}

export function DeleteWorkDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Удалить работу',
			description:
				'Удаляет работу из базы данных (каскадно удаляются этапы и файлы)'
		}),
		ApiParam({
			name: 'id',
			type: 'number',
			description: 'ID работы',
			example: 1
		}),
		ApiResponse({
			status: 200,
			description: 'Работа успешно удалена',
			schema: {
				type: 'object',
				properties: {
					message: {
						type: 'string',
						example: 'Работа успешно удалена'
					}
				}
			}
		}),
		ApiResponse({ status: 401, description: 'Не авторизован' }),
		ApiResponse({
			status: 403,
			description: 'Доступ запрещен (только для ADMIN)'
		}),
		ApiResponse({ status: 404, description: 'Работа не найдена' })
	)
}
