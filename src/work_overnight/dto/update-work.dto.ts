import { CreateWorkDto } from './create-work.dto'
import { PartialType } from '@nestjs/swagger'

export class UpdateWorkDto extends PartialType(CreateWorkDto) {}
