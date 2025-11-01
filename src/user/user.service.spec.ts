import { UserService } from './user.service'
import { NotFoundException } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import * as argon2 from 'argon2'
import { AuthDto } from '@/auth/dto/auth.dto'
import { PrismaService } from '@/prisma/prisma.service'

jest.mock('argon2')

describe('UserService', () => {
	let service: UserService
	let prismaService: PrismaService

	const mockPrismaService = {
		user: {
			findUnique: jest.fn(),
			create: jest.fn()
		}
	}

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				UserService,
				{
					provide: PrismaService,
					useValue: mockPrismaService
				}
			]
		}).compile()

		service = module.get<UserService>(UserService)
		prismaService = module.get<PrismaService>(PrismaService)
	})

	afterEach(() => {
		jest.clearAllMocks()
	})

	it('should be defined', () => {
		expect(service).toBeDefined()
	})

	describe('findById', () => {
		const mockUser = {
			id: 1,
			name: 'Test User',
			email: 'test@example.com',
			password: 'hashedPassword123',
			picture: null,
			role: 'USER',
			isEmailVerified: false,
			createdAt: new Date(),
			updatedAt: new Date(),
			accounts: [
				{
					id: 1,
					provider: 'credentials',
					providerAccountId: 'test@example.com',
					userId: 1,
					accessToken: null,
					refreshToken: null,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			]
		}

		it('should return user by id with accounts', async () => {
			mockPrismaService.user.findUnique.mockResolvedValue(mockUser)

			const result = await service.findById(1)

			expect(prismaService.user.findUnique).toHaveBeenCalledWith({
				where: {
					id: 1
				},
				include: {
					accounts: true
				}
			})
			expect(result).toEqual(mockUser)
			expect(result.accounts).toBeDefined()
			expect(result.accounts).toHaveLength(1)
		})

		it('should throw NotFoundException if user does not exist', async () => {
			mockPrismaService.user.findUnique.mockResolvedValue(null)

			await expect(service.findById(999)).rejects.toThrow(
				NotFoundException
			)
			await expect(service.findById(999)).rejects.toThrow(
				'User with id 999 not found'
			)

			expect(prismaService.user.findUnique).toHaveBeenCalledWith({
				where: {
					id: 999
				},
				include: {
					accounts: true
				}
			})
		})

		it('should return user with empty accounts array if no accounts exist', async () => {
			const userWithoutAccounts = {
				...mockUser,
				accounts: []
			}

			mockPrismaService.user.findUnique.mockResolvedValue(
				userWithoutAccounts
			)

			const result = await service.findById(1)

			expect(result.accounts).toEqual([])
		})
	})

	describe('findByEmail', () => {
		const mockUser = {
			id: 1,
			name: 'Test User',
			email: 'test@example.com',
			password: 'hashedPassword123',
			picture: null,
			role: 'USER',
			isEmailVerified: false,
			createdAt: new Date(),
			updatedAt: new Date(),
			accounts: [
				{
					id: 1,
					provider: 'credentials',
					providerAccountId: 'test@example.com',
					userId: 1,
					accessToken: null,
					refreshToken: null,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			]
		}

		it('should return user by email with accounts', async () => {
			mockPrismaService.user.findUnique.mockResolvedValue(mockUser)

			const result = await service.findByEmail('test@example.com')

			expect(prismaService.user.findUnique).toHaveBeenCalledWith({
				where: {
					email: 'test@example.com'
				},
				include: {
					accounts: true
				}
			})
			expect(result).toEqual(mockUser)
			expect(result?.email).toBe('test@example.com')
		})

		it('should return null if user does not exist', async () => {
			mockPrismaService.user.findUnique.mockResolvedValue(null)

			const result = await service.findByEmail('nonexistent@example.com')

			expect(prismaService.user.findUnique).toHaveBeenCalledWith({
				where: {
					email: 'nonexistent@example.com'
				},
				include: {
					accounts: true
				}
			})
			expect(result).toBeNull()
		})

		it('should handle email with different cases', async () => {
			mockPrismaService.user.findUnique.mockResolvedValue(mockUser)

			const result = await service.findByEmail('Test@Example.COM')

			expect(prismaService.user.findUnique).toHaveBeenCalledWith({
				where: {
					email: 'Test@Example.COM'
				},
				include: {
					accounts: true
				}
			})
			expect(result).toEqual(mockUser)
		})

		it('should return user with multiple accounts', async () => {
			const userWithMultipleAccounts = {
				...mockUser,
				accounts: [
					{
						id: 1,
						provider: 'credentials',
						providerAccountId: 'test@example.com',
						userId: 1
					},
					{
						id: 2,
						provider: 'google',
						providerAccountId: 'google-123456',
						userId: 1
					}
				]
			}

			mockPrismaService.user.findUnique.mockResolvedValue(
				userWithMultipleAccounts
			)

			const result = await service.findByEmail('test@example.com')

			expect(result?.accounts).toHaveLength(2)
		})
	})

	describe('createUser', () => {
		const authDto: AuthDto = {
			name: 'New User',
			email: 'newuser@example.com',
			password: 'password123',
			passwordRepeat: 'password123'
		}

		const mockCreatedUser = {
			id: 1,
			name: 'New User',
			email: 'newuser@example.com',
			password: 'hashedPassword123',
			picture: null,
			role: 'USER',
			isEmailVerified: false,
			createdAt: new Date(),
			updatedAt: new Date(),
			accounts: []
		}

		beforeEach(() => {
			;(argon2.hash as jest.Mock).mockResolvedValue('hashedPassword123')
		})

		it('should create a new user with hashed password', async () => {
			mockPrismaService.user.create.mockResolvedValue(mockCreatedUser)

			const result = await service.createUser(authDto)

			expect(argon2.hash).toHaveBeenCalledWith('password123')
			expect(prismaService.user.create).toHaveBeenCalledWith({
				data: {
					name: 'New User',
					email: 'newuser@example.com',
					password: 'hashedPassword123'
				},
				include: {
					accounts: true
				}
			})
			expect(result).toEqual(mockCreatedUser)
			expect(result.password).toBe('hashedPassword123')
		})

		it('should create user with empty password if password is not provided', async () => {
			const authDtoWithoutPassword: AuthDto = {
				name: 'OAuth User',
				email: 'oauth@example.com',
				password: ''
			}

			const oauthUser = {
				...mockCreatedUser,
				name: 'OAuth User',
				email: 'oauth@example.com',
				password: ''
			}

			mockPrismaService.user.create.mockResolvedValue(oauthUser)

			const result = await service.createUser(authDtoWithoutPassword)

			expect(argon2.hash).not.toHaveBeenCalled()
			expect(prismaService.user.create).toHaveBeenCalledWith({
				data: {
					name: 'OAuth User',
					email: 'oauth@example.com',
					password: ''
				},
				include: {
					accounts: true
				}
			})
			expect(result.password).toBe('')
		})

		it('should create user with optional fields', async () => {
			const authDtoWithOptionals: AuthDto = {
				name: 'User With Picture',
				email: 'picture@example.com',
				password: 'password123',
				picture: 'https://example.com/avatar.jpg',
				isEmailVerified: true,
				authMethod: 'google'
			}

			const userWithPicture = {
				...mockCreatedUser,
				name: 'User With Picture',
				email: 'picture@example.com',
				picture: 'https://example.com/avatar.jpg',
				isEmailVerified: true
			}

			mockPrismaService.user.create.mockResolvedValue(userWithPicture)

			const result = await service.createUser(authDtoWithOptionals)

			expect(argon2.hash).toHaveBeenCalledWith('password123')
			expect(prismaService.user.create).toHaveBeenCalled()
			expect(result).toEqual(userWithPicture)
		})

		it('should hash different passwords differently', async () => {
			;(argon2.hash as jest.Mock)
				.mockResolvedValueOnce('hashedPassword1')
				.mockResolvedValueOnce('hashedPassword2')

			const authDto1: AuthDto = {
				name: 'User 1',
				email: 'user1@example.com',
				password: 'password1'
			}

			const authDto2: AuthDto = {
				name: 'User 2',
				email: 'user2@example.com',
				password: 'password2'
			}

			mockPrismaService.user.create
				.mockResolvedValueOnce({
					...mockCreatedUser,
					password: 'hashedPassword1'
				})
				.mockResolvedValueOnce({
					...mockCreatedUser,
					password: 'hashedPassword2'
				})

			await service.createUser(authDto1)
			await service.createUser(authDto2)

			expect(argon2.hash).toHaveBeenCalledTimes(2)
			expect(argon2.hash).toHaveBeenNthCalledWith(1, 'password1')
			expect(argon2.hash).toHaveBeenNthCalledWith(2, 'password2')
		})

		it('should return user with accounts included', async () => {
			const userWithAccount = {
				...mockCreatedUser,
				accounts: [
					{
						id: 1,
						provider: 'credentials',
						providerAccountId: 'newuser@example.com',
						userId: 1
					}
				]
			}

			mockPrismaService.user.create.mockResolvedValue(userWithAccount)

			const result = await service.createUser(authDto)

			expect(result.accounts).toBeDefined()
			expect(result.accounts).toHaveLength(1)
		})
	})

	describe('edge cases', () => {
		it('should handle very long passwords', async () => {
			const longPassword = 'a'.repeat(100)
			;(argon2.hash as jest.Mock).mockResolvedValue('hashedLongPassword')

			const authDto: AuthDto = {
				name: 'Test User',
				email: 'test@example.com',
				password: longPassword
			}

			mockPrismaService.user.create.mockResolvedValue({
				id: 1,
				name: 'Test User',
				email: 'test@example.com',
				password: 'hashedLongPassword',
				accounts: []
			})

			await service.createUser(authDto)

			expect(argon2.hash).toHaveBeenCalledWith(longPassword)
		})

		it('should handle special characters in email', async () => {
			const specialEmail = 'user+test@example.co.uk'

			mockPrismaService.user.findUnique.mockResolvedValue(null)

			const result = await service.findByEmail(specialEmail)

			expect(prismaService.user.findUnique).toHaveBeenCalledWith({
				where: {
					email: specialEmail
				},
				include: {
					accounts: true
				}
			})
			expect(result).toBeNull()
		})

		it('should handle special characters in name', async () => {
			;(argon2.hash as jest.Mock).mockResolvedValue('hashedPassword')

			const authDto: AuthDto = {
				name: "O'Brien-Smith Müller",
				email: 'special@example.com',
				password: 'password123'
			}

			mockPrismaService.user.create.mockResolvedValue({
				id: 1,
				name: "O'Brien-Smith Müller",
				email: 'special@example.com',
				password: 'hashedPassword',
				accounts: []
			})

			const result = await service.createUser(authDto)

			expect(result.name).toBe("O'Brien-Smith Müller")
		})
	})
})
