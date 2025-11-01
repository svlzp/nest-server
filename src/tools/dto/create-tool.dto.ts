import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateToolDto {
	@ApiProperty({
		description: 'Название инструмента',
		example: 'Фреза концевая'
	})
	@IsString()
	@IsNotEmpty()
	name: string

	@ApiProperty({
		description: 'Уникальный ID инструмента',
		example: 'T001'
	})
	@IsString()
	@IsNotEmpty()
	tool_id: string

	@ApiPropertyOptional({
		description: 'Описание инструмента',
		example: 'Концевая фреза 12мм'
	})
	@IsString()
	@IsOptional()
	description?: string

	@ApiPropertyOptional({
		description: 'Размер инструмента',
		example: '12mm'
	})
	@IsString()
	@IsOptional()
	size?: string

	@ApiPropertyOptional({
		description: 'Тип инструмента',
		example: 'Фреза'
	})
	@IsString()
	@IsOptional()
	type?: string
}
