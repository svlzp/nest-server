import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Length,
	Validate
} from 'class-validator'
import { IsPasswordsMatchingConstraint } from '@/libs/common/decorators/is-passwords-matching-constraint.decorator'

export class AuthDto {
	@ApiProperty({
		description: 'Имя пользователя',
		example: 'Иван Иванов',
		type: String
	})
	@IsString({ message: 'Name must be a string' })
	name: string

	@ApiProperty({
		description: 'Email адрес пользователя',
		example: 'user@example.com',
		type: String
	})
	@IsString({ message: 'Email must be a string' })
	@IsEmail({}, { message: 'Invalid email format' })
	@IsNotEmpty({ message: 'Email cannot be empty' })
	email: string

	@ApiProperty({
		description: 'Пароль (6-20 символов)',
		example: 'Password123!',
		minLength: 6,
		maxLength: 20,
		type: String
	})
	@IsString({ message: 'Password must be a string' })
	@IsNotEmpty({ message: 'Password cannot be empty' })
	@Length(6, 20, { message: 'Password must be between 6 and 20 characters' })
	password: string

	@ApiPropertyOptional({
		description: 'URL изображения профиля пользователя',
		example: 'https://example.com/avatar.jpg',
		type: String
	})
	@IsOptional()
	@IsString({ message: 'Picture must be a string' })
	picture?: string

	@ApiPropertyOptional({
		description: 'Статус подтверждения email',
		example: false,
		type: Boolean
	})
	@IsOptional()
	isEmailVerified?: boolean

	@ApiPropertyOptional({
		description: 'Метод аутентификации',
		example: 'CREDENTIALS',
		enum: ['CREDENTIALS', 'GOOGLE', 'GITHUB'],
		type: String
	})
	@IsOptional()
	@IsString({ message: 'Auth method must be a string' })
	authMethod?: string

	@ApiPropertyOptional({
		description: 'Подтверждение пароля (должно совпадать с password)',
		example: 'Password123!',
		type: String
	})
	@IsOptional()
	@Validate(IsPasswordsMatchingConstraint, {
		message: 'Passwords do not match'
	})
	passwordRepeat?: string
}
