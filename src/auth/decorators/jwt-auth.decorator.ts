import { Roles } from './roles.decorator'
import { applyDecorators, UseGuards } from '@nestjs/common'
import { UserRole } from '__generated__'
import { JwtAuthGuard } from '../guards/jwt.guard'
import { RolesGuard } from '../guards/roles.guard'

/**
 * @param roles - User roles to authorize
 */
export function JwtAuthorization(...roles: UserRole[]) {
	if (roles.length > 0) {
		return applyDecorators(
			Roles(...roles),
			UseGuards(JwtAuthGuard, RolesGuard)
		)
	}

	return applyDecorators(UseGuards(JwtAuthGuard))
}
