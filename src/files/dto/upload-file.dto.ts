/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { FileType } from '__generated__'
import { IsEnum, IsInt, IsOptional } from 'class-validator'

export class UploadFileDto {
	@ApiProperty({
		description: 'Тип файла',
		enum: FileType,
		example: FileType.IMAGE,
		required: true
	})
	@IsEnum(FileType)
	type: FileType

	@ApiPropertyOptional({
		description: 'ID инструмента для привязки файла',
		type: 'number',
		example: 1
	})
	@IsOptional()
	@IsInt()
	toolId?: number

	@ApiPropertyOptional({
		description: 'ID станка для привязки файла',
		type: 'number',
		example: 1
	})
	@IsOptional()
	@IsInt()
	machineId?: number

	@ApiPropertyOptional({
		description: 'ID работы для привязки файла',
		type: 'number',
		example: 1
	})
	@IsOptional()
	@IsInt()
	workId?: number

	@ApiPropertyOptional({
		description: 'ID этапа работы для привязки файла',
		type: 'number',
		example: 1
	})
	@IsOptional()
	@IsInt()
	stageId?: number
}
