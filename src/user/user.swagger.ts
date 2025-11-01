import { UserResponseDto } from './dto/user-response.dto'
import { applyDecorators, HttpStatus } from '@nestjs/common'
import {
	ApiBearerAuth,
	ApiForbiddenResponse,
	ApiNotFoundResponse,
	ApiOperation,
	ApiParam,
	ApiResponse,
	ApiUnauthorizedResponse
} from '@nestjs/swagger'

export function GetProfileDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получение профиля текущего пользователя',
			description:
				'Возвращает полную информацию о профиле авторизованного пользователя. Требуется аутентификация.'
		}),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Профиль пользователя успешно получен',
			type: UserResponseDto
		}),
		ApiUnauthorizedResponse({
			description: 'Пользователь не авторизован'
		}),
		ApiNotFoundResponse({
			description: 'Пользователь не найден'
		})
	)
}

export function GetUserByIdDocs() {
	return applyDecorators(
		ApiBearerAuth(),
		ApiOperation({
			summary: 'Получение пользователя по ID (только для админов)',
			description:
				'Возвращает полную информацию о пользователе по его ID. Доступно только для пользователей с ролью ADMIN.'
		}),
		ApiParam({
			name: 'id',
			description: 'Уникальный идентификатор пользователя',
			example: 1,
			type: Number
		}),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Пользователь успешно найден',
			type: UserResponseDto
		}),
		ApiUnauthorizedResponse({
			description: 'Пользователь не авторизован'
		}),
		ApiForbiddenResponse({
			description: 'Недостаточно прав. Требуется роль ADMIN'
		}),
		ApiNotFoundResponse({
			description: 'Пользователь с указанным ID не найден'
		})
	)
}
