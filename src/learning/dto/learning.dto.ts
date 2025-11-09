import { Type } from 'class-transformer'
import {
	IsString,
	IsArray,
	ValidateNested,
	IsOptional,
	IsInt
} from 'class-validator'

export class ContentLearningDto {
	@IsString()
	description: string

	@IsOptional()
	@IsArray()
	files?: Express.Multer.File[]
}

export class UpdateContentLearningDto {
	@IsOptional()
	@IsInt()
	id: number

	@IsString()
	description: string

	@IsOptional()
	@IsArray()
	@IsInt({ each: true })
	keepFileIds?: number[]
	@IsOptional()
	@IsArray()
	@IsInt({ each: true })
	removeFileIds?: number[]
}

export class CreateLearningDto {
	@IsString()
	title: string

	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => ContentLearningDto)
	content: ContentLearningDto[]
}

export class UpdateLearningDto {
	@IsOptional()
	@IsString()
	title?: string

	@IsInt()
	id: number

	@IsOptional()
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => UpdateContentLearningDto)
	content?: UpdateContentLearningDto[]

	@IsOptional()
	@IsArray()
	@IsInt({ each: true })
	removeFileIds?: number[]

	@IsOptional()
	@IsArray()
	@IsInt({ each: true })
	removeContentIds?: number[]
}
