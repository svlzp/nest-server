import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsString, Min } from 'class-validator'

export class UpdateQuantityDto {
	@ApiProperty({
		description: 'RT номер работы',
		example: 'RT-2025-001'
	})
	@IsString()
	rt: string

	@ApiProperty({
		description: 'Новое количество оставшихся деталей',
		example: 45,
		minimum: 0
	})
	@IsInt()
	@Min(0)
	@Type(() => Number)
	leftToMake: number
}
