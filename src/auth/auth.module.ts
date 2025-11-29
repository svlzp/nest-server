import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { getProvidrsConfig } from './config/providers.config'
import { EmailConfirmationModule } from './email-confirmation/email-confirmation.module'
import { ProviderModule } from './provider/provider.module'
import { forwardRef, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { UserService } from '@/user/user.service'

@Module({
	imports: [
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
