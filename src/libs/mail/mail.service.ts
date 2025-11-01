import { confirmationTemplate } from './templates/confirmation.template'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { render } from '@react-email/components'
import { Resend } from 'resend'

@Injectable()
export class MailService {
	private resend: Resend

	constructor(private readonly configService: ConfigService) {
		this.resend = new Resend(
			this.configService.getOrThrow<string>('RESEND_API_KEY')
		)
	}

	public async sendConfirmationEmail(
		email: string,
		token: string
	): Promise<void> {
		const domain = this.configService.getOrThrow<string>('ALLOWED_ORIGINS')
		const html = await render(confirmationTemplate({ domain, token }))
		await this.senderEmail(email, 'Email Confirmation', html)
	}

	private async senderEmail(
		email: string,
		subject: string,
		html: string
	): Promise<void> {
		await this.resend.emails.send({
			from: this.configService.getOrThrow<string>('RESEND_FROM_EMAIL'),
			to: email,
			subject: subject,
			html: html
		})
	}
}
