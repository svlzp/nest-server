import { EmailConfirmationDto } from './dto/email.dto'
import { EmailConfirmationService } from './email-confirmation.service'
import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	Req
} from '@nestjs/common'
import { Request } from 'express'

@Controller('auth/email-confirmation')
export class EmailConfirmationController {
	constructor(
		private readonly emailConfirmationService: EmailConfirmationService
	) {}

	@Post()
	@HttpCode(HttpStatus.OK)
	public async newVerification(
		@Req() req: Request,
		@Body() dto: EmailConfirmationDto
	) {
		return this.emailConfirmationService.newVerification(req, dto)
	}
}
