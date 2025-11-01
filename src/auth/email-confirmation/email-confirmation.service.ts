import { EmailConfirmationDto } from './dto/email.dto'
import {
	BadRequestException,
	forwardRef,
	Inject,
	Injectable,
	NotFoundException
} from '@nestjs/common'
import { TokkenType, User } from '__generated__'
import { Request } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { MailService } from '@/libs/mail/mail.service'
import { PrismaService } from '@/prisma/prisma.service'
import { UserService } from '@/user/user.service'
import { AuthService } from '../auth.service'

@Injectable()
export class EmailConfirmationService {
	public constructor(
		private readonly prisma: PrismaService,
		private readonly mailService: MailService,
		private readonly userService: UserService,
		@Inject(forwardRef(() => AuthService))
		private readonly authService: AuthService
	) {}

	public async newVerification(req: Request, dto: EmailConfirmationDto) {
		const token = await this.prisma.tokken.findUnique({
			where: { token: dto.token, type: TokkenType.VERIFICATION }
		})
		if (!token) {
			throw new NotFoundException('Invalid or expired token')
		}
		const isExpired = token.expiresIn < new Date()
		if (isExpired) {
			throw new BadRequestException('Token has expired')
		}
		const user = await this.userService.findByEmail(token.email)
		if (!user) {
			throw new NotFoundException('User not found')
		}
		await this.prisma.user.update({
			where: { id: user.id },
			data: { isVerified: true }
		})
		await this.prisma.tokken.delete({
			where: { id: token.id }
		})
		return this.authService.saveSession(user, req)
	}
	public async sendVerificationToken(user:User) {
		const verificationToken = await this.generateToken(user.email)

		await this.mailService.sendConfirmationEmail(
			verificationToken.email,
			verificationToken.token
		)
		return true
	}

	private async generateToken(email: string) {
		const token = uuidv4()
		const expiresIn = new Date(new Date().getTime() + 3600 * 1000) // 1 hour
		const existingToken = await this.prisma.tokken.findFirst({
			where: { email, type: TokkenType.VERIFICATION }
		})
		if (existingToken) {
			await this.prisma.tokken.delete({
				where: { id: existingToken.id }
			})
		}
		const verificationToken = await this.prisma.tokken.create({
			data: {
				email,
				token,
				type: TokkenType.VERIFICATION,
				expiresIn
			}
		})
		return verificationToken
	}
}
