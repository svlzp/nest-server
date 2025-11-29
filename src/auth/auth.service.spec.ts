import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { LoginDto } from './dto/login.dto'
import { EmailConfirmationService } from './email-confirmation/email-confirmation.service'
import { ProviderService } from './provider/provider.service'
import {
	ConflictException,
	NotFoundException,
	UnauthorizedException,
	InternalServerErrorException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Test, TestingModule } from '@nestjs/testing'
import { TokkenType } from '__generated__'
import * as argon2 from 'argon2'
import { Request, Response } from 'express'
import { PrismaService } from '@/prisma/prisma.service'
import { UserService } from '@/user/user.service'

jest.mock('argon2')

describe('AuthService', () => {
	let service: AuthService
	let jwtService: JwtService
	let prismaService: PrismaService
	let userService: UserService

	const mockJwtService = {
		sign: jest.fn(),
		verify: jest.fn()
	}

	const mockPrismaService = {
		tokken: {
			create: jest.fn(),
			findFirst: jest.fn()
		},
		account: {
			create: jest.fn(),
			findFirst: jest.fn()
		}
	}

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
				{ provide: JwtService, useValue: mockJwtService },
				{ provide: PrismaService, useValue: mockPrismaService },
				{ provide: UserService, useValue: mockUserService },
				{ provide: ConfigService, useValue: mockConfigService },
				{ provide: ProviderService, useValue: mockProviderService },
				{
					provide: EmailConfirmationService,
					useValue: mockEmailService
				}
			]
		}).compile()

		service = module.get<AuthService>(AuthService)
		jwtService = module.get<JwtService>(JwtService)
		prismaService = module.get<PrismaService>(PrismaService)
		userService = module.get<UserService>(UserService)

		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	describe('loginUserMobile', () => {
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
			role: 'USER'
		}

		it('should return access and refresh tokens', async () => {
			const mockAccessToken = 'mock-access-token'
			const mockRefreshToken = 'mock-refresh-token'

			mockUserService.findByEmail.mockResolvedValue(mockUser)
			;(argon2.verify as jest.Mock).mockResolvedValue(true)
			mockJwtService.sign
				.mockReturnValueOnce(mockAccessToken)
				.mockReturnValueOnce(mockRefreshToken)
			mockPrismaService.tokken.create.mockResolvedValue({
				id: 1,
				email: mockUser.email,
				type: TokkenType.REFRESH_TOKEN,
				token: mockRefreshToken,
				expiresIn: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
			})

			const result = await service.loginUserMobile(loginDto)

			expect(jwtService.sign).toHaveBeenCalledTimes(2)
			expect(jwtService.sign).toHaveBeenCalledWith(
				{
					sub: mockUser.id,
					email: mockUser.email,
					role: mockUser.role
				},
				{ expiresIn: '15m' }
			)
			expect(jwtService.sign).toHaveBeenCalledWith(
				{ sub: mockUser.id, email: mockUser.email, type: 'refresh' },
				{ expiresIn: '30d' }
			)
			expect(prismaService.tokken.create).toHaveBeenCalledWith({
				data: {
					email: mockUser.email,
					type: TokkenType.REFRESH_TOKEN,
					token: mockRefreshToken,
					expiresIn: expect.any(Date)
				}
			})
			expect(result).toEqual({
				accessToken: mockAccessToken,
				refreshToken: mockRefreshToken,
				user: {
					id: mockUser.id,
					email: mockUser.email,
					name: mockUser.name,
					role: mockUser.role
				}
			})
		})

		it('should throw NotFoundException if user not found', async () => {
			mockUserService.findByEmail.mockResolvedValue(null)

			await expect(service.loginUserMobile(loginDto)).rejects.toThrow(
				NotFoundException
			)
		})

		it('should throw UnauthorizedException if password invalid', async () => {
			mockUserService.findByEmail.mockResolvedValue(mockUser)
			;(argon2.verify as jest.Mock).mockResolvedValue(false)

			await expect(service.loginUserMobile(loginDto)).rejects.toThrow(
				UnauthorizedException
			)
		})

		it('should throw UnauthorizedException if user not verified', async () => {
			mockUserService.findByEmail.mockResolvedValue({
				...mockUser,
				isVerified: false
			})
			;(argon2.verify as jest.Mock).mockResolvedValue(true)

			await expect(service.loginUserMobile(loginDto)).rejects.toThrow(
				UnauthorizedException
			)
		})
	})

	describe('refreshAccessToken', () => {
		const mockRefreshToken = 'valid-refresh-token'
		const mockUser = {
			id: 1,
			email: 'test@example.com',
			role: 'USER',
			isVerified: true
		}

		it('should return new access token', async () => {
			const mockAccessToken = 'new-access-token'
			const mockPayload = {
				sub: 1,
				email: 'test@example.com',
				type: 'refresh'
			}

			mockJwtService.verify.mockReturnValue(mockPayload)
			mockPrismaService.tokken.findFirst.mockResolvedValue({
				id: 1,
				email: mockUser.email,
				type: TokkenType.REFRESH_TOKEN,
				token: mockRefreshToken,
				expiresIn: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
			})
			mockUserService.findByEmail.mockResolvedValue(mockUser)
			mockJwtService.sign.mockReturnValue(mockAccessToken)

			const result = await service.refreshAccessToken(mockRefreshToken)

			expect(jwtService.verify).toHaveBeenCalledWith(mockRefreshToken)
			expect(userService.findByEmail).toHaveBeenCalledWith(
				mockPayload.email
			)
			expect(jwtService.sign).toHaveBeenCalledWith(
				{
					sub: mockUser.id,
					email: mockUser.email,
					role: mockUser.role
				},
				{ expiresIn: '15m' }
			)
			expect(result).toEqual({ accessToken: mockAccessToken })
		})

		it('should throw UnauthorizedException if token type invalid', async () => {
			mockJwtService.verify.mockReturnValue({
				sub: 1,
				email: 'test@example.com',
				type: 'access'
			})

			await expect(
				service.refreshAccessToken(mockRefreshToken)
			).rejects.toThrow(UnauthorizedException)
		})

		it('should throw UnauthorizedException if token not in database', async () => {
			mockJwtService.verify.mockReturnValue({
				sub: 1,
				email: 'test@example.com',
				type: 'refresh'
			})
			mockPrismaService.tokken.findFirst.mockResolvedValue(null)

			await expect(
				service.refreshAccessToken(mockRefreshToken)
			).rejects.toThrow(UnauthorizedException)
		})

		it('should throw UnauthorizedException if user not found', async () => {
			mockJwtService.verify.mockReturnValue({
				sub: 1,
				email: 'test@example.com',
				type: 'refresh'
			})
			mockPrismaService.tokken.findFirst.mockResolvedValue({
				id: 1,
				email: 'test@example.com',
				type: TokkenType.REFRESH_TOKEN,
				token: mockRefreshToken,
				expiresIn: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
			})
			mockUserService.findByEmail.mockImplementation(() => {
				throw new NotFoundException('User not found')
			})

			await expect(
				service.refreshAccessToken(mockRefreshToken)
			).rejects.toThrow(UnauthorizedException)
		})
	})

	describe('regesterUser', () => {
		const authDto: AuthDto = {
			name: 'Test User',
			email: 'test@example.com',
			password: 'password123',
			passwordRepeat: 'password123'
		}

		it('should register new user', async () => {
			const mockUser = { id: 1, email: authDto.email }
			mockUserService.findByEmail.mockResolvedValue(null)
			mockUserService.createUser.mockResolvedValue(mockUser)

			const result = await service.regesterUser(authDto, mockRequest)

			expect(userService.findByEmail).toHaveBeenCalledWith(authDto.email)
			expect(userService.createUser).toHaveBeenCalledWith(authDto)
			expect(mockRequest.session.userId).toBe(mockUser.id)
			expect(result).toEqual(mockUser)
		})

		it('should throw ConflictException if user exists', async () => {
			mockUserService.findByEmail.mockResolvedValue({ id: 1 })

			await expect(
				service.regesterUser(authDto, mockRequest)
			).rejects.toThrow(ConflictException)
		})
	})

	describe('logoutUser', () => {
		it('should logout user successfully', async () => {
			mockConfigService.getOrThrow.mockReturnValue('connect.sid')

			await service.logoutUser(mockRequest, mockResponse)

			expect(mockRequest.session.destroy).toHaveBeenCalled()
			expect(mockResponse.clearCookie).toHaveBeenCalledWith('connect.sid')
		})

		it('should throw error if session destroy fails', async () => {
			// Mock console.error to suppress error output in tests
			const consoleErrorSpy = jest
				.spyOn(console, 'error')
				.mockImplementation()

			const mockReq = {
				session: {
					destroy: jest.fn((callback: any) => {
						callback(new Error('Failed'))
					})
				}
			} as unknown as Request

			await expect(
				service.logoutUser(mockReq, mockResponse)
			).rejects.toThrow(InternalServerErrorException)

			expect(consoleErrorSpy).toHaveBeenCalledWith(
				'Session destroy error:',
				expect.any(Error)
			)

			consoleErrorSpy.mockRestore()
		})
	})
})
