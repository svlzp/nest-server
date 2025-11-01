import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator'

export class CreateWorkDto {
	@ApiPropertyOptional({
		description: 'Название работы',
		example: 'Производство детали A-123'
	})
	@IsString()
	@IsOptional()
	name?: string

	@ApiProperty({
		description: 'RT номер (уникальный идентификатор)',
		example: 'RT-2025-001',
		required: true
	})
	@IsString()
	@IsNotEmpty()
	rt: string

	@ApiProperty({
		description: 'Общее количество деталей для производства',
		example: 100,
		minimum: 0
	})
	@IsInt()
	@Min(0)
	@Type(() => Number)
	quantity: number

	@ApiPropertyOptional({
		description: 'Кем изготовлено',
		example: 'Иванов И.И.'
	})
	@IsString()
	@IsOptional()
	madeBy?: string

	@ApiProperty({
		description: 'Осталось изготовить деталей',
		example: 50,
		minimum: 0
	})
	@IsInt()
	@Min(0)
	@Type(() => Number)
	leftToMake: number

	@ApiPropertyOptional({
		description: 'Время производства одной детали',
		example: '45 минут'
	})
	@IsString()
	@IsOptional()
	productionTime?: string

	@ApiProperty({
		description: 'ID станка, на котором выполняется работа',
		example: 1,
		required: true
	})
	@IsInt()
	@Type(() => Number)
	machineId: number
}
