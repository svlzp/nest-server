import {
	CanActivate,
	ExecutionContext,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Request } from 'express'

@Injectable()
export class JwtAuthGuard implements CanActivate {
	constructor(
		private readonly jwtService: JwtService,
		private readonly configService: ConfigService
	) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const request = context.switchToHttp().getRequest<Request>()
		const token = this.extractTokenFromHeader(request)

		if (!token) {
			throw new UnauthorizedException('Access token is required')
		}

		try {
			const payload = await this.jwtService.verifyAsync(token, {
				secret: this.configService.get<string>('JWT_SECRET')
			})

			if (payload.type === 'refresh') {
				throw new UnauthorizedException('Invalid token type')
			}

			request['user'] = {
				id: payload.sub,
				email: payload.email,
				role: payload.role
			}

			return true
		} catch {
			throw new UnauthorizedException('Invalid or expired access token')
		}
	}

	private extractTokenFromHeader(request: Request): string | undefined {
		const authHeader = request.headers.authorization
		if (!authHeader) {
			return undefined
		}

		const [type, token] = authHeader.split(' ')
		return type === 'Bearer' ? token : undefined
	}
}
