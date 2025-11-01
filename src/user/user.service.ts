import { Injectable, NotFoundException } from '@nestjs/common'
import { hash } from 'argon2'
import { AuthDto } from '@/auth/dto/auth.dto'
import { PrismaService } from '@/prisma/prisma.service'

@Injectable()
export class UserService {
	public constructor(readonly prisma: PrismaService) {}

	public async findById(id: number) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				accounts: true
			}
		})
		if (!user) {
			throw new NotFoundException(`User with id ${id} not found`)
		}
		return user
	}
	public async findByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email
			},
			include: {
				accounts: true
			}
		})
	}
	public async createUser(dto: AuthDto) {
		const { name, email, password, passwordRepeat } = dto
		const user = await this.prisma.user.create({
			data: {
				name,
				email,
				password: password ? await hash(password) : ''
			},
			include: {
				accounts: true
			}
		})
		return user
	}
}
