import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateMachineDto {
	@ApiProperty({
		description: 'Название станка',
		example: 'ЧПУ фрезер HAAS VF-2',
		required: true
	})
	@IsString()
	@IsNotEmpty()
	name: string

	@ApiPropertyOptional({
		description: 'Описание станка',
		example: 'Вертикальный обрабатывающий центр с 3 осями'
	})
	@IsString()
	@IsOptional()
	description?: string

	@ApiPropertyOptional({
		description: 'Файлы станка (изображения)',
		type: 'array',
		items: {
			type: 'string',
			format: 'binary'
		}
	})
	@IsOptional()
	@Type(() => Object)
	files?: Express.Multer.File[]
}
