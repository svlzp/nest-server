import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User } from '__generated__'
import { RequestWithUser } from '../guards/guards.types'


export const Authorized = createParamDecorator(
	(data: keyof User, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest<RequestWithUser>()
		const user = request.user

		if (!user) return undefined;
		return data ? (user[data] as unknown) : user
	}
)
