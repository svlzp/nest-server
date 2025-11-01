import { CreateToolDto } from './create-tool.dto'
import { PartialType } from '@nestjs/mapped-types'

export class UpdateToolDto extends PartialType(CreateToolDto) {}
