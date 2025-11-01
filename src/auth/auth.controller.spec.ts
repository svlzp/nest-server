import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { LoginDto } from './dto/login.dto'
import { ProviderService } from './provider/provider.service'
import {
	BadRequestException,
	NotFoundException,
	ConflictException,
	UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { Request, Response } from 'express'

describe('AuthController', () => {
	let controller: AuthController
	let authService: AuthService
	let providerService: ProviderService
	let configService: ConfigService

	const mockAuthService = {
		regesterUser: jest.fn(),
		loginUser: jest.fn(),
		extractProfileFromCode: jest.fn(),
		logoutUser: jest.fn()
	}

	const mockProviderService = {
		findByService: jest.fn()
	}

	const mockConfigService = {
		getOrThrow: jest.fn()
	}

	const mockRequest = {
		session: {
			userId: null,
			save: jest.fn((callback?: any) => {
				if (callback) callback(null)
				return mockRequest.session as any
			}),
			destroy: jest.fn((callback?: any) => {
				if (callback) callback(null)
			})
		}
	} as unknown as Request

	const mockResponse = {
		redirect: jest.fn(),
		clearCookie: jest.fn()
	} as unknown as Response

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AuthController],
			providers: [
				{
					provide: AuthService,
					useValue: mockAuthService
				},
				{
					provide: ProviderService,
					useValue: mockProviderService
				},
				{
					provide: ConfigService,
					useValue: mockConfigService
				}
			]
		}).compile()

		controller = module.get<AuthController>(AuthController)
		authService = module.get<AuthService>(AuthService)
		providerService = module.get<ProviderService>(ProviderService)
		configService = module.get<ConfigService>(ConfigService)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(controller).toBeDefined()
	})

	describe('registerUser', () => {
		const registerDto: AuthDto = {
			email: 'test@example.com',
			password: 'Password123!',
			name: 'Test User'
		}

		it('should register a new user successfully', async () => {
			const expectedResult = {
				id: 1,
				email: registerDto.email,
				name: registerDto.name
			}
			mockAuthService.regesterUser.mockResolvedValue(expectedResult)

			const result = await controller.registerUser(
				mockRequest,
				registerDto
			)

			expect(authService.regesterUser).toHaveBeenCalledWith(
				registerDto,
				mockRequest
			)
			expect(result).toEqual(expectedResult)
		})

		it('should throw ConflictException if user already exists', async () => {
			mockAuthService.regesterUser.mockRejectedValue(
				new ConflictException('User already exists')
			)

			await expect(
				controller.registerUser(mockRequest, registerDto)
			).rejects.toThrow(ConflictException)
			await expect(
				controller.registerUser(mockRequest, registerDto)
			).rejects.toThrow('User already exists')
		})

		it('should call service with correct parameters', async () => {
			mockAuthService.regesterUser.mockResolvedValue({})

			await controller.registerUser(mockRequest, registerDto)

			expect(authService.regesterUser).toHaveBeenCalledTimes(1)
			expect(authService.regesterUser).toHaveBeenCalledWith(
				registerDto,
				mockRequest
			)
		})
	})

	describe('loginUser', () => {
		const loginDto: LoginDto = {
			email: 'test@example.com',
			password: 'Password123!'
		}

		it('should login user successfully', async () => {
			const expectedResult = {
				id: 1,
				email: loginDto.email,
				name: 'Test User'
			}
			mockAuthService.loginUser.mockResolvedValue(expectedResult)

			const result = await controller.loginUser(mockRequest, loginDto)

			expect(authService.loginUser).toHaveBeenCalledWith(
				mockRequest,
				loginDto
			)
			expect(result).toEqual(expectedResult)
		})

		it('should throw NotFoundException if user does not exist', async () => {
			mockAuthService.loginUser.mockRejectedValue(
				new NotFoundException('User not found')
			)

			await expect(
				controller.loginUser(mockRequest, loginDto)
			).rejects.toThrow(NotFoundException)
			await expect(
				controller.loginUser(mockRequest, loginDto)
			).rejects.toThrow('User not found')
		})

		it('should throw UnauthorizedException for invalid credentials', async () => {
			mockAuthService.loginUser.mockRejectedValue(
				new UnauthorizedException('Invalid password')
			)

			await expect(
				controller.loginUser(mockRequest, loginDto)
			).rejects.toThrow(UnauthorizedException)
		})

		it('should throw UnauthorizedException if email is not verified', async () => {
			mockAuthService.loginUser.mockRejectedValue(
				new UnauthorizedException('Please verify your email first')
			)

			await expect(
				controller.loginUser(mockRequest, loginDto)
			).rejects.toThrow('Please verify your email first')
		})
	})

	describe('oauthCallback', () => {
		const provider = 'google'
		const authCode = 'auth_code_123'

		it('should handle OAuth callback successfully', async () => {
			const mockUser = { id: 1, email: 'oauth@example.com' }
			mockAuthService.extractProfileFromCode.mockResolvedValue(mockUser)
			mockConfigService.getOrThrow.mockReturnValue(
				'http://localhost:3000'
			)

			await controller.oauthCallback(
				mockRequest,
				mockResponse,
				authCode,
				provider
			)

			expect(authService.extractProfileFromCode).toHaveBeenCalledWith(
				mockRequest,
				provider,
				authCode
			)
			expect(mockResponse.redirect).toHaveBeenCalledWith(
				'http://localhost:3000/dashboard/settings'
			)
		})

		it('should throw BadRequestException if code is missing', async () => {
			await expect(
				controller.oauthCallback(
					mockRequest,
					mockResponse,
					'',
					provider
				)
			).rejects.toThrow(BadRequestException)
			await expect(
				controller.oauthCallback(
					mockRequest,
					mockResponse,
					'',
					provider
				)
			).rejects.toThrow('Authorization code not found')
		})

		it('should throw NotFoundException if profile is not found', async () => {
			mockAuthService.extractProfileFromCode.mockRejectedValue(
				new NotFoundException('User profile not found')
			)

			await expect(
				controller.oauthCallback(
					mockRequest,
					mockResponse,
					authCode,
					provider
				)
			).rejects.toThrow(NotFoundException)
		})

		it('should redirect to correct URL from config', async () => {
			const customOrigin = 'https://example.com'
			mockAuthService.extractProfileFromCode.mockResolvedValue({})
			mockConfigService.getOrThrow.mockReturnValue(customOrigin)

			await controller.oauthCallback(
				mockRequest,
				mockResponse,
				authCode,
				provider
			)

			expect(configService.getOrThrow).toHaveBeenCalledWith(
				'ALLOWED_ORIGINS'
			)
			expect(mockResponse.redirect).toHaveBeenCalledWith(
				`${customOrigin}/dashboard/settings`
			)
		})
	})

	describe('connectToProvider', () => {
		const provider = 'google'

		const mockProviderInstance = {
			getAuthorizationUrl: jest.fn()
		}

		it('should return authorization URL for valid provider', async () => {
			const expectedUrl =
				'https://accounts.google.com/o/oauth2/v2/auth?...'
			mockProviderService.findByService.mockReturnValue(
				mockProviderInstance
			)
			mockProviderInstance.getAuthorizationUrl.mockReturnValue(
				expectedUrl
			)

			const result = await controller.connectToProvider(provider)

			expect(providerService.findByService).toHaveBeenCalledWith(provider)
			expect(mockProviderInstance.getAuthorizationUrl).toHaveBeenCalled()
			expect(result).toBe(expectedUrl)
		})

		it('should throw NotFoundException if provider is not found', async () => {
			mockProviderService.findByService.mockReturnValue(null)

			await expect(
				controller.connectToProvider(provider)
			).rejects.toThrow(NotFoundException)
			await expect(
				controller.connectToProvider(provider)
			).rejects.toThrow('Provider not found')
		})

		it('should work with different providers', async () => {
			const providers = ['google', 'github']

			for (const prov of providers) {
				mockProviderService.findByService.mockReturnValue(
					mockProviderInstance
				)
				mockProviderInstance.getAuthorizationUrl.mockReturnValue(
					`https://${prov}.com/auth`
				)

				const result = await controller.connectToProvider(prov)

				expect(providerService.findByService).toHaveBeenCalledWith(prov)
				expect(result).toBe(`https://${prov}.com/auth`)
			}
		})
	})

	describe('logoutUser', () => {
		it('should logout user successfully', async () => {
			mockAuthService.logoutUser.mockResolvedValue(undefined)

			await controller.logoutUser(mockRequest, mockResponse)

			expect(authService.logoutUser).toHaveBeenCalledWith(
				mockRequest,
				mockResponse
			)
		})

		it('should call logout service with correct parameters', async () => {
			mockAuthService.logoutUser.mockResolvedValue(undefined)

			await controller.logoutUser(mockRequest, mockResponse)

			expect(authService.logoutUser).toHaveBeenCalledTimes(1)
			expect(authService.logoutUser).toHaveBeenCalledWith(
				mockRequest,
				mockResponse
			)
		})

		it('should handle logout errors', async () => {
			const error = new Error('Session destroy failed')
			mockAuthService.logoutUser.mockRejectedValue(error)

			await expect(
				controller.logoutUser(mockRequest, mockResponse)
			).rejects.toThrow('Session destroy failed')
		})
	})
})
