import { AuthDto } from './dto/auth.dto'
import { LoginDto } from './dto/login.dto'
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service'
import { ProviderService } from './provider/provider.service'
import {
	ConflictException,
	Injectable,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { AuthMethod } from '__generated__'
import { verify } from 'argon2'
import { Request, Response } from 'express'
import { PrismaService } from '@/prisma/prisma.service'
import { UserService } from '@/user/user.service'

@Injectable()
export class AuthService {
	constructor(
		private readonly prisma: PrismaService,
		private readonly user: UserService,
		private readonly confiServis: ConfigService,
		private readonly providerServise: ProviderService,
		private readonly emailService: EmailConfirmationService
	) {}

	public async regesterUser(dto: AuthDto, req: Request) {
		const existingUser = await this.user.findByEmail(dto.email)
		if (existingUser) {
			throw new ConflictException('User already exists')
		}
		const newUser = await this.user.createUser(dto)
		//await this.emailService.sendVerificationToken(newUser)
		//return { message: 'you need to confirm your email address to login' }
		return this.saveSession(newUser, req)
	}
	public async loginUser(req: Request, dto: LoginDto) {
		const user = await this.user.findByEmail(dto.email)
		if (!user || !user.password) {
			throw new NotFoundException('User not found')
		}
		const isPasswordValid = await verify(user.password, dto.password)
		if (!isPasswordValid) {
			throw new UnauthorizedException('Invalid credentials')
		}
		if (!user.isVerified) {
			await this.emailService.sendVerificationToken(user)
			throw new UnauthorizedException('Please verify your email to login')
		}
		return this.saveSession(user, req)
	}
	public async extractProfileFromCode(
		req: Request,
		provider: string,
		code: string
	) {
		const providerInstance = this.providerServise.findByService(provider)
		const profile = await providerInstance?.findUserByCode(code)

		if (!profile) {
			throw new NotFoundException('User profile not found')
		}

		const account = await this.user.prisma.account.findFirst({
			where: {
				provider: provider,
				providerAccountId: profile.id
			}
		})
		let user = account?.userId
			? await this.user.findById(account.userId)
			: null
		if (user) {
			return this.saveSession(user, req)
		}
		const providerName =
			profile.provider.toUpperCase() as keyof typeof AuthMethod
		user = await this.user.createUser({
			email: profile.email,
			name: profile.name,
			picture: profile.picture,
			authMethod: AuthMethod[providerName] || null,
			isEmailVerified: true,
			password: ''
		})

		if (!account) {
			await this.prisma.account.create({
				data: {
					provider: provider,
					providerAccountId: profile.id,
					userId: user.id,
					type: 'oauth',
					accessToken: profile.access_token || '',
					refreshToken: profile.refresh_token || '',
					expiresAt: profile.expires_at || null
				}
			})
		}
		return this.saveSession(user, req)
	}
	public async logoutUser(req: Request, res: Response): Promise<void> {
		return new Promise((resolve, reject) => {
			req.session.destroy(err => {
				if (err) {
					console.error('Session destroy error:', err)
					return reject(
						new InternalServerErrorException(
							'Failed to destroy session'
						)
					)
				}
				res.clearCookie(
					this.confiServis.getOrThrow<string>('SESSION_NAME') ||
						'connect.sid'
				)
				console.log('Session destroyed successfully')
				resolve()
			})
		})
	}
	public async saveSession(newUser: { id: number }, req: Request) {
		return new Promise((resolve, reject) => {
			req.session.userId = newUser.id
			req.session.save(err => {
				if (err) {
					console.error('Session save error:', err)
					return reject(
						new InternalServerErrorException(
							'Failed to save session'
						)
					)
				}
				console.log('Session saved successfully')
				resolve(newUser)
			})
		})
	}
}
