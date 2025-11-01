import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { LoginDto } from './dto/login.dto'
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service'
import { ProviderService } from './provider/provider.service'
import {
	ConflictException,
	InternalServerErrorException,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { AuthMethod } from '__generated__'
import * as argon2 from 'argon2'
import { Request, Response } from 'express'
import { PrismaService } from '@/prisma/prisma.service'
import { UserService } from '@/user/user.service'

jest.mock('argon2')
jest.mock('@/libs/mail/mail.service')

describe('AuthService', () => {
	let service: AuthService
	let userService: UserService
	let prismaService: PrismaService
	let configService: ConfigService
	let providerService: ProviderService
	let emailService: EmailConfirmationService

	const mockUserService = {
		findByEmail: jest.fn(),
		createUser: jest.fn(),
		findById: jest.fn(),
		prisma: {
			account: {
				findFirst: jest.fn()
			}
		}
	}

	const mockPrismaService = {
		account: {
			create: jest.fn(),
			findFirst: jest.fn()
		}
	}

	const mockConfigService = {
		getOrThrow: jest.fn()
	}

	const mockProviderService = {
		findByService: jest.fn()
	}

	const mockEmailService = {
		sendVerificationToken: jest.fn()
	}

	const mockRequest = {
		session: {
			userId: null,
			save: jest.fn((callback?: any) => {
				if (callback) callback(null)
				return mockRequest.session as any
			}),
			destroy: jest.fn((callback: any) => {
				if (callback) callback(null)
				return mockRequest.session as any
			})
		}
	} as unknown as Request

	const mockResponse = {
		clearCookie: jest.fn()
	} as unknown as Response

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				AuthService,
				{
					provide: UserService,
					useValue: mockUserService
				},
				{
					provide: PrismaService,
					useValue: mockPrismaService
				},
				{
					provide: ConfigService,
					useValue: mockConfigService
				},
				{
					provide: ProviderService,
					useValue: mockProviderService
				},
				{
					provide: EmailConfirmationService,
					useValue: mockEmailService
				}
			]
		}).compile()

		service = module.get<AuthService>(AuthService)
		userService = module.get<UserService>(UserService)
		prismaService = module.get<PrismaService>(PrismaService)
		configService = module.get<ConfigService>(ConfigService)
		providerService = module.get<ProviderService>(ProviderService)
		emailService = module.get<EmailConfirmationService>(
			EmailConfirmationService
		)

		jest.clearAllMocks()
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	describe('regesterUser', () => {
		const authDto: AuthDto = {
			name: 'Test User',
			email: 'test@example.com',
			password: 'password123',
			passwordRepeat: 'password123'
		}

		const mockUser = {
			id: 1,
			name: 'Test User',
			email: 'test@example.com',
			password: 'hashedPassword',
			isVerified: false,
			role: 'USER',
			createdAt: new Date(),
			updatedAt: new Date()
		}

		it('should register a new user successfully', async () => {
			mockUserService.findByEmail.mockResolvedValue(null)
			mockUserService.createUser.mockResolvedValue(mockUser)
			mockEmailService.sendVerificationToken.mockResolvedValue(undefined)

			const result = await service.regesterUser(authDto, mockRequest)

			expect(userService.findByEmail).toHaveBeenCalledWith(authDto.email)
			expect(userService.createUser).toHaveBeenCalledWith(authDto)
			expect(emailService.sendVerificationToken).toHaveBeenCalledWith(
				mockUser
			)
			expect(result).toEqual({
				message: 'you need to confirm your email address to login'
			})
		})

		it('should throw ConflictException if user already exists', async () => {
			mockUserService.findByEmail.mockResolvedValue(mockUser)

			await expect(
				service.regesterUser(authDto, mockRequest)
			).rejects.toThrow(ConflictException)
			await expect(
				service.regesterUser(authDto, mockRequest)
			).rejects.toThrow('User already exists')

			expect(userService.createUser).not.toHaveBeenCalled()
			expect(emailService.sendVerificationToken).not.toHaveBeenCalled()
		})

		it('should send verification email to new user', async () => {
			mockUserService.findByEmail.mockResolvedValue(null)
			mockUserService.createUser.mockResolvedValue(mockUser)
			mockEmailService.sendVerificationToken.mockResolvedValue(undefined)

			await service.regesterUser(authDto, mockRequest)

			expect(emailService.sendVerificationToken).toHaveBeenCalledTimes(1)
			expect(emailService.sendVerificationToken).toHaveBeenCalledWith(
				mockUser
			)
		})
	})

	describe('loginUser', () => {
		const loginDto: LoginDto = {
			email: 'test@example.com',
			password: 'password123'
		}

		const mockUser = {
			id: 1,
			name: 'Test User',
			email: 'test@example.com',
			password: 'hashedPassword',
			isVerified: true,
			role: 'USER',
			createdAt: new Date(),
			updatedAt: new Date()
		}

		it('should login user successfully with valid credentials', async () => {
			mockUserService.findByEmail.mockResolvedValue(mockUser)
			;(argon2.verify as jest.Mock).mockResolvedValue(true)

			const result = await service.loginUser(mockRequest, loginDto)

			expect(userService.findByEmail).toHaveBeenCalledWith(loginDto.email)
			expect(argon2.verify).toHaveBeenCalledWith(
				mockUser.password,
				loginDto.password
			)
			expect(mockRequest.session.userId).toBe(mockUser.id)
			expect(result).toEqual(mockUser)
		})

		it('should throw NotFoundException if user does not exist', async () => {
			mockUserService.findByEmail.mockResolvedValue(null)

			await expect(
				service.loginUser(mockRequest, loginDto)
			).rejects.toThrow(NotFoundException)
			await expect(
				service.loginUser(mockRequest, loginDto)
			).rejects.toThrow('User not found')

			expect(argon2.verify).not.toHaveBeenCalled()
		})

		it('should throw NotFoundException if user has no password (OAuth user)', async () => {
			const oauthUser = {
				...mockUser,
				password: null
			}
			mockUserService.findByEmail.mockResolvedValue(oauthUser)

			await expect(
				service.loginUser(mockRequest, loginDto)
			).rejects.toThrow(NotFoundException)
			await expect(
				service.loginUser(mockRequest, loginDto)
			).rejects.toThrow('User not found')

			expect(argon2.verify).not.toHaveBeenCalled()
		})

		it('should throw UnauthorizedException if password is invalid', async () => {
			mockUserService.findByEmail.mockResolvedValue(mockUser)
			;(argon2.verify as jest.Mock).mockResolvedValue(false)

			await expect(
				service.loginUser(mockRequest, loginDto)
			).rejects.toThrow(UnauthorizedException)
			await expect(
				service.loginUser(mockRequest, loginDto)
			).rejects.toThrow('Invalid credentials')
		})

		it('should throw UnauthorizedException if email is not verified', async () => {
			const unverifiedUser = {
				...mockUser,
				isVerified: false
			}
			mockUserService.findByEmail.mockResolvedValue(unverifiedUser)
			;(argon2.verify as jest.Mock).mockResolvedValue(true)
			mockEmailService.sendVerificationToken.mockResolvedValue(undefined)

			await expect(
				service.loginUser(mockRequest, loginDto)
			).rejects.toThrow(UnauthorizedException)
			await expect(
				service.loginUser(mockRequest, loginDto)
			).rejects.toThrow('Please verify your email to login')

			expect(emailService.sendVerificationToken).toHaveBeenCalledWith(
				unverifiedUser
			)
		})

		it('should resend verification email if user is not verified', async () => {
			const unverifiedUser = {
				...mockUser,
				isVerified: false
			}
			mockUserService.findByEmail.mockResolvedValue(unverifiedUser)
			;(argon2.verify as jest.Mock).mockResolvedValue(true)
			mockEmailService.sendVerificationToken.mockResolvedValue(undefined)

			try {
				await service.loginUser(mockRequest, loginDto)
			} catch {
				expect(emailService.sendVerificationToken).toHaveBeenCalledWith(
					unverifiedUser
				)
			}
		})
	})

	describe('extractProfileFromCode', () => {
		const mockProfile = {
			id: 'google-123456',
			email: 'oauth@example.com',
			name: 'OAuth User',
			picture: 'https://example.com/photo.jpg',
			provider: 'google',
			access_token: 'access_token_123',
			refresh_token: 'refresh_token_123',
			expires_at: new Date()
		}

		const mockUser = {
			id: 1,
			name: 'OAuth User',
			email: 'oauth@example.com',
			password: '',
			isVerified: true,
			role: 'USER',
			createdAt: new Date(),
			updatedAt: new Date()
		}

		const mockProviderInstance = {
			findUserByCode: jest.fn()
		}

		it('should authenticate existing user via OAuth', async () => {
			const mockAccount = {
				id: 1,
				userId: 1,
				provider: 'google',
				providerAccountId: 'google-123456'
			}

			mockProviderService.findByService.mockReturnValue(
				mockProviderInstance
			)
			mockProviderInstance.findUserByCode.mockResolvedValue(mockProfile)
			mockUserService.prisma.account.findFirst.mockResolvedValue(
				mockAccount
			)
			mockUserService.findById.mockResolvedValue(mockUser)

			const result = await service.extractProfileFromCode(
				mockRequest,
				'google',
				'auth_code_123'
			)

			expect(providerService.findByService).toHaveBeenCalledWith('google')
			expect(mockProviderInstance.findUserByCode).toHaveBeenCalledWith(
				'auth_code_123'
			)
			expect(userService.prisma.account.findFirst).toHaveBeenCalledWith({
				where: {
					provider: 'google',
					providerAccountId: mockProfile.id
				}
			})
			expect(userService.findById).toHaveBeenCalledWith(1)
			expect(result).toEqual(mockUser)
		})

		it('should create new user and account for first-time OAuth login', async () => {
			mockProviderService.findByService.mockReturnValue(
				mockProviderInstance
			)
			mockProviderInstance.findUserByCode.mockResolvedValue(mockProfile)
			mockUserService.prisma.account.findFirst.mockResolvedValue(null)
			mockUserService.createUser.mockResolvedValue(mockUser)
			mockPrismaService.account.create.mockResolvedValue({})

			const result = await service.extractProfileFromCode(
				mockRequest,
				'google',
				'auth_code_123'
			)

			expect(userService.createUser).toHaveBeenCalledWith({
				email: mockProfile.email,
				name: mockProfile.name,
				picture: mockProfile.picture,
				authMethod: AuthMethod.GOOGLE,
				isEmailVerified: true,
				password: ''
			})
			expect(prismaService.account.create).toHaveBeenCalledWith({
				data: {
					provider: 'google',
					providerAccountId: mockProfile.id,
					userId: mockUser.id,
					type: 'oauth',
					accessToken: mockProfile.access_token,
					refreshToken: mockProfile.refresh_token,
					expiresAt: mockProfile.expires_at
				}
			})
			expect(result).toEqual(mockUser)
		})

		it('should throw NotFoundException if profile is not found', async () => {
			mockProviderService.findByService.mockReturnValue(
				mockProviderInstance
			)
			mockProviderInstance.findUserByCode.mockResolvedValue(null)

			await expect(
				service.extractProfileFromCode(
					mockRequest,
					'google',
					'invalid_code'
				)
			).rejects.toThrow(NotFoundException)
			await expect(
				service.extractProfileFromCode(
					mockRequest,
					'google',
					'invalid_code'
				)
			).rejects.toThrow('User profile not found')
		})

		it('should handle different OAuth providers', async () => {
			const githubProfile = {
				...mockProfile,
				provider: 'github',
				id: 'github-789'
			}

			mockProviderService.findByService.mockReturnValue(
				mockProviderInstance
			)
			mockProviderInstance.findUserByCode.mockResolvedValue(githubProfile)
			mockUserService.prisma.account.findFirst.mockResolvedValue(null)
			mockUserService.createUser.mockResolvedValue(mockUser)
			mockPrismaService.account.create.mockResolvedValue({})

			await service.extractProfileFromCode(
				mockRequest,
				'github',
				'auth_code_456'
			)

			expect(providerService.findByService).toHaveBeenCalledWith('github')
			expect(userService.createUser).toHaveBeenCalledWith(
				expect.objectContaining({
					authMethod: AuthMethod.GITHUB
				})
			)
		})
	})

	describe('logoutUser', () => {
		it('should logout user successfully', async () => {
			mockConfigService.getOrThrow.mockReturnValue('connect.sid')

			await service.logoutUser(mockRequest, mockResponse)

			expect(mockRequest.session.destroy).toHaveBeenCalled()
			expect(mockResponse.clearCookie).toHaveBeenCalledWith('connect.sid')
		})

		it('should clear cookie with correct session name', async () => {
			mockConfigService.getOrThrow.mockReturnValue('my-session')

			await service.logoutUser(mockRequest, mockResponse)

			expect(configService.getOrThrow).toHaveBeenCalledWith(
				'SESSION_NAME'
			)
			expect(mockResponse.clearCookie).toHaveBeenCalledWith('my-session')
		})

		it('should throw InternalServerErrorException if session destroy fails', async () => {
			const error = new Error('Session destroy failed')
			mockRequest.session.destroy = jest.fn((callback: any) => {
				if (callback) callback(error)
				return mockRequest.session as any
			}) as any

			await expect(
				service.logoutUser(mockRequest, mockResponse)
			).rejects.toThrow(InternalServerErrorException)
			await expect(
				service.logoutUser(mockRequest, mockResponse)
			).rejects.toThrow('Failed to destroy session')
		})
	})

	describe('saveSession', () => {
		const newUser = { id: 1 }

		it('should save session successfully', async () => {
			const result = await service.saveSession(newUser, mockRequest)

			expect(mockRequest.session.userId).toBe(1)
			expect(mockRequest.session.save).toHaveBeenCalled()
			expect(result).toEqual(newUser)
		})

		it('should throw InternalServerErrorException if session save fails', async () => {
			const error = new Error('Session save failed')
			mockRequest.session.save = jest.fn((callback?: any) => {
				if (callback) callback(error)
				return mockRequest.session as any
			}) as any

			await expect(
				service.saveSession(newUser, mockRequest)
			).rejects.toThrow(InternalServerErrorException)
			await expect(
				service.saveSession(newUser, mockRequest)
			).rejects.toThrow('Failed to save session')

			mockRequest.session.save = jest.fn((callback?: any) => {
				if (callback) callback(null)
				return mockRequest.session as any
			}) as any
		})

		it('should set userId in session', async () => {
			await service.saveSession(newUser, mockRequest)

			expect(mockRequest.session.userId).toBe(newUser.id)
		})
	})

	describe('edge cases', () => {
		it('should handle OAuth provider without authMethod mapping', async () => {
			const mockProfile = {
				id: 'unknown-provider-123',
				email: 'unknown@example.com',
				name: 'Unknown User',
				picture: null,
				provider: 'unknown',
				access_token: 'token',
				refresh_token: 'refresh',
				expires_at: null
			}

			const mockUser = {
				id: 1,
				email: 'unknown@example.com',
				name: 'Unknown User'
			}

			const mockProviderInstance = {
				findUserByCode: jest.fn().mockResolvedValue(mockProfile)
			}

			mockProviderService.findByService.mockReturnValue(
				mockProviderInstance
			)
			mockUserService.prisma.account.findFirst.mockResolvedValue(null)
			mockUserService.createUser.mockResolvedValue(mockUser)
			mockPrismaService.account.create.mockResolvedValue({})

			await service.extractProfileFromCode(
				mockRequest,
				'unknown',
				'code123'
			)

			expect(userService.createUser).toHaveBeenCalledWith(
				expect.objectContaining({
					authMethod: null
				})
			)
		})

		it('should handle empty password in login for OAuth user', async () => {
			const oauthUser = {
				id: 1,
				email: 'oauth@example.com',
				password: '',
				isVerified: true
			}

			mockUserService.findByEmail.mockResolvedValue(oauthUser)

			await expect(
				service.loginUser(mockRequest, {
					email: 'oauth@example.com',
					password: 'anypassword'
				})
			).rejects.toThrow(NotFoundException)
		})
	})
})
