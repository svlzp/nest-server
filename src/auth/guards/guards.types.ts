import { UserRole } from '__generated__'

export interface RequestWithUser extends Request {
	user: {
		role: UserRole
	}
	session: {
		userId?: number
	}
}
