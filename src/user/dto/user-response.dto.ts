import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { AuthMethod, UserRole } from '__generated__'

export class UserResponseDto {
	@ApiProperty({
		description: 'Уникальный идентификатор пользователя',
		example: 1,
		type: Number
	})
	id: number

	@ApiProperty({
		description: 'Email адрес пользователя',
		example: 'user@example.com',
		type: String
	})
	email: string

	@ApiProperty({
		description: 'Имя пользователя',
		example: 'Иван Иванов',
		type: String
	})
	name: string

	@ApiPropertyOptional({
		description: 'URL изображения профиля пользователя',
		example: 'https://example.com/avatar.jpg',
		type: String,
		nullable: true
	})
	picture?: string | null

	@ApiProperty({
		description: 'Роль пользователя в системе',
		enum: UserRole,
		example: UserRole.USER
	})
	role: UserRole

	@ApiProperty({
		description: 'Статус подтверждения email адреса',
		example: true,
		type: Boolean
	})
	isVerified: boolean

	@ApiProperty({
		description: 'Метод аутентификации пользователя',
		enum: AuthMethod,
		example: AuthMethod.CREDENTIALS
	})
	authMethod: AuthMethod

	@ApiProperty({
		description: 'Дата и время создания пользователя',
		example: '2025-11-01T12:00:00.000Z',
		type: String,
		format: 'date-time'
	})
	createdAt: Date

	@ApiProperty({
		description: 'Дата и время последнего обновления профиля',
		example: '2025-11-01T12:00:00.000Z',
		type: String,
		format: 'date-time'
	})
	updatedAt: Date

	@ApiPropertyOptional({
		description: 'Связанные OAuth аккаунты пользователя',
		type: 'array',
		items: {
			type: 'object',
			properties: {
				id: { type: 'number', example: 1 },
				provider: { type: 'string', example: 'google' },
				providerAccountId: { type: 'string', example: '123456789' },
				type: { type: 'string', example: 'oauth' }
			}
		}
	})
	accounts?: Array<{
		id: number
		provider: string
		providerAccountId: string
		type: string
	}>
}
