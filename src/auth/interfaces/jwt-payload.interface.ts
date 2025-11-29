import { UserRole } from '__generated__'

export interface JwtPayload {
	sub: number // user id
	email: string
	role: UserRole
}

export interface RequestWithUser extends Request {
	user: JwtPayload
}
