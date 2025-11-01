import { UserService } from './user.service'
import { GetProfileDocs, GetUserByIdDocs } from './user.swagger'
import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { UserRole } from '__generated__'
import { Authorization } from '@/auth/decorators/auth.decorator'
import { Authorized } from '@/auth/decorators/authorized.decorator'

@ApiTags('Users')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@GetProfileDocs()
	@Authorization()
	@HttpCode(HttpStatus.OK)
	@Get('profile')
	public async getProfile(@Authorized('id') userId: number) {
		return this.userService.findById(userId)
	}

	@GetUserByIdDocs()
	@Authorization(UserRole.ADMIN)
	@HttpCode(HttpStatus.OK)
	@Get('by-id/:id')
	public async getUserById(@Param('id') id: string) {
		return this.userService.findById(Number(id))
	}
}
