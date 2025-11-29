import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { getProvidrsConfig } from './config/providers.config'
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module'
import { ProviderModule } from './provider/provider.module'
import { forwardRef, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { UserService } from '@/user/user.service'

@Module({
	imports: [
		JwtModule.registerAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				secret: configService.getOrThrow<string>('JWT_SECRET')
			}),
			inject: [ConfigService]
		}),
		ProviderModule.regesterAsync({
			imports: [ConfigModule],
			useFactory: getProvidrsConfig,
			inject: [ConfigService]
		}),
		forwardRef(() => EmailConfirmationModule)
	],
	controllers: [AuthController],
	providers: [AuthService, UserService],
	exports: [AuthService]
})
export class AuthModule {}
