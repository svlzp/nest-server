import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class LoginDto {
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
		description: 'Пароль пользователя',
		example: 'Password123!',
		minLength: 6,
		maxLength: 20,
		type: String
	})
	@IsString({ message: 'Password must be a string' })
	@IsNotEmpty({ message: 'Password cannot be empty' })
	@Length(6, 20, { message: 'Password must be between 6 and 20 characters' })
	password: string
}
