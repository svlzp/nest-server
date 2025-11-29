import { AuthService } from './auth.service'
import {
	LoginDocs,
	LoginMobileDocs,
	LogoutDocs,
	OAuthCallbackDocs,
	OAuthConnectDocs,
	RefreshTokenDocs,
	RegisterDocs
} from './auth.swagger'
import { AuthDto } from './dto/auth.dto'
import { LoginDto } from './dto/login.dto'
import { AuthProviderGuard } from './guards/provider.guard'
import { ProviderService } from './provider/provider.service'
import {
	BadRequestException,
	Body,
	Controller,
	Get,
	HttpCode,
	HttpStatus,
	NotFoundException,
	Param,
	Post,
	Query,
	Req,
	Res,
	UseGuards
} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { ApiTags } from '@nestjs/swagger'
import { Request, Response } from 'express'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
	public constructor(
		private readonly authService: AuthService,
		private readonly providerServise: ProviderService,
		private readonly configService: ConfigService
	) {}

	@RegisterDocs()
	@Post('register')
	@HttpCode(HttpStatus.CREATED)
	async registerUser(@Req() req: Request, @Body() dto: AuthDto) {
		return this.authService.regesterUser(dto, req)
	}
	@LoginDocs()
	@Post('login')
	@HttpCode(HttpStatus.OK)
	async loginUser(@Req() req: Request, @Body() dto: LoginDto) {
		return this.authService.loginUser(req, dto)
	}
	@LoginMobileDocs()
	@Post('login/mobile')
	@HttpCode(HttpStatus.OK)
	async loginUserMobile(@Body() dto: LoginDto) {
		return this.authService.loginUserMobile(dto)
	}

	@RefreshTokenDocs()
	@Post('refresh')
	@HttpCode(HttpStatus.OK)
	async refreshToken(@Body('refreshToken') refreshToken: string) {
		return this.authService.refreshAccessToken(refreshToken)
	}
	@OAuthCallbackDocs()
	@Get('oauth/callback/:provider')
	@UseGuards(AuthProviderGuard)
	async oauthCallback(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response,
		@Query('code') code: string,
		@Param('provider') provider: string
	) {
		if (!code) {
			throw new BadRequestException('Authorization code not found')
		}
		await this.authService.extractProfileFromCode(req, provider, code)
		return res.redirect(
			`${this.configService.getOrThrow<string>('ALLOWED_ORIGINS')}/dashboard/settings`
		)
	}

	@OAuthConnectDocs()
	@UseGuards(AuthProviderGuard)
	@Get('oauth/connect/:provider')
	async connectToProvider(@Param('provider') provider: string) {
		const providerInstance = this.providerServise.findByService(provider)
		if (!providerInstance) {
			throw new NotFoundException('Provider not found')
		}
		return providerInstance.getAuthorizationUrl()
	}

	@LogoutDocs()
	@Post('logout')
	@HttpCode(HttpStatus.OK)
	async logoutUser(
		@Req() req: Request,
		@Res({ passthrough: true }) res: Response
	) {
		return this.authService.logoutUser(req, res)
	}
}
