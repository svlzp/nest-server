import { AuthDto } from './dto/auth.dto'
import { LoginDto } from './dto/login.dto'
import { applyDecorators, HttpStatus } from '@nestjs/common'
import {
	ApiBadRequestResponse,
	ApiBody,
	ApiConflictResponse,
	ApiNotFoundResponse,
	ApiOperation,
	ApiParam,
	ApiQuery,
	ApiResponse,
	ApiUnauthorizedResponse
} from '@nestjs/swagger'

export function RegisterDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Регистрация нового пользователя',
			description:
				'Создает нового пользователя с email и паролем. Отправляет письмо для подтверждения email.'
		}),
		ApiBody({ type: AuthDto }),
		ApiResponse({
			status: HttpStatus.CREATED,
			description:
				'Пользователь успешно зарегистрирован. Письмо с подтверждением отправлено на email.'
		}),
		ApiConflictResponse({
			description: 'Пользователь с таким email уже существует'
		}),
		ApiBadRequestResponse({
			description: 'Некорректные данные для регистрации'
		})
	)
}

export function LoginDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Вход в систему',
			description:
				'Аутентификация пользователя по email и паролю. Создает сессию для авторизованного пользователя.'
		}),
		ApiBody({ type: LoginDto }),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Успешный вход в систему. Сессия создана.'
		}),
		ApiNotFoundResponse({
			description:
				'Пользователь не найден или не имеет пароля (OAuth пользователь)'
		}),
		ApiUnauthorizedResponse({
			description:
				'Неверный пароль или email не подтвержден. Письмо с подтверждением может быть отправлено повторно.'
		})
	)
}

export function OAuthCallbackDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Callback для OAuth авторизации',
			description:
				'Обрабатывает callback от OAuth провайдера (Google, GitHub). Создает или авторизует пользователя и перенаправляет на страницу настроек.'
		}),
		ApiParam({
			name: 'provider',
			description: 'Имя OAuth провайдера',
			enum: ['google', 'github']
		}),
		ApiQuery({
			name: 'code',
			description: 'Код авторизации от OAuth провайдера',
			required: true
		}),
		ApiResponse({
			status: HttpStatus.FOUND,
			description:
				'Перенаправление на страницу настроек после успешной авторизации'
		}),
		ApiBadRequestResponse({
			description: 'Код авторизации не найден или неверный провайдер'
		}),
		ApiNotFoundResponse({
			description: 'OAuth профиль пользователя не найден'
		})
	)
}

export function OAuthConnectDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Получение URL для OAuth авторизации',
			description:
				'Возвращает URL для перенаправления пользователя на страницу авторизации OAuth провайдера (Google, GitHub).'
		}),
		ApiParam({
			name: 'provider',
			description: 'Имя OAuth провайдера',
			enum: ['google', 'github']
		}),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'URL для авторизации через выбранный провайдер',
			schema: {
				type: 'object',
				properties: {
					url: {
						type: 'string',
						example:
							'https://accounts.google.com/o/oauth2/v2/auth?...'
					}
				}
			}
		}),
		ApiBadRequestResponse({
			description: 'Неверный провайдер'
		}),
		ApiNotFoundResponse({
			description: 'Провайдер не найден'
		})
	)
}

export function LogoutDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Выход из системы',
			description:
				'Завершает сессию пользователя, удаляет cookies и очищает данные авторизации.'
		}),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Успешный выход из системы. Сессия завершена.'
		})
	)
}

export function LoginMobileDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Вход для мобильных приложений',
			description:
				'Аутентификация пользователя по email и паролю для мобильных приложений. Возвращает JWT токены вместо сессии.'
		}),
		ApiBody({ type: LoginDto }),
		ApiResponse({
			status: HttpStatus.OK,
			description:
				'Успешный вход. Возвращает access token (15 мин) и refresh token (30 дней).',
			schema: {
				type: 'object',
				properties: {
					accessToken: {
						type: 'string',
						description: 'JWT токен для доступа к API (15 минут)',
						example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
					},
					refreshToken: {
						type: 'string',
						description:
							'JWT токен для обновления access токена (30 дней)',
						example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
					},
					user: {
						type: 'object',
						properties: {
							id: { type: 'number' },
							email: { type: 'string' },
							name: { type: 'string' },
							role: { type: 'string' }
						}
					}
				}
			}
		}),
		ApiNotFoundResponse({
			description:
				'Пользователь не найден или не имеет пароля (OAuth пользователь)'
		}),
		ApiUnauthorizedResponse({
			description:
				'Неверный пароль или email не подтвержден. Письмо с подтверждением может быть отправлено повторно.'
		})
	)
}

export function RefreshTokenDocs() {
	return applyDecorators(
		ApiOperation({
			summary: 'Обновление access токена',
			description:
				'Использует refresh token для получения нового access токена. Refresh token проверяется в базе данных.'
		}),
		ApiBody({
			schema: {
				type: 'object',
				properties: {
					refreshToken: {
						type: 'string',
						description: 'Refresh token полученный при входе',
						example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
					}
				},
				required: ['refreshToken']
			}
		}),
		ApiResponse({
			status: HttpStatus.OK,
			description: 'Успешное обновление токена',
			schema: {
				type: 'object',
				properties: {
					accessToken: {
						type: 'string',
						description:
							'Новый JWT токен для доступа к API (15 минут)',
						example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
					}
				}
			}
		}),
		ApiUnauthorizedResponse({
			description:
				'Refresh token недействителен, истёк или не найден в базе данных'
		})
	)
}
