import { AuthModule } from './auth/auth.module'
import { EmailConfirmationModule } from './auth/email-confirmation/email-confirmation.module'
import { FilesModule } from './files/files.module'
import { LearningModule } from './learning/learning.module'
import { IS_DEV } from './libs/common/utils/is-dev.util'
import { MailModule } from './libs/mail/mail.module'
import { MachineCncModule } from './machine_cnc/machine_cnc.module'
import { PrismaModule } from './prisma/prisma.module'
import { ToolsModule } from './tools/tools.module'
import { UserModule } from './user/user.module'
import { WorkOvernightModule } from './work_overnight/work_overnight.module'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { ScheduleModule } from '@nestjs/schedule'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			ignoreEnvFile: !IS_DEV
		}),
		JwtModule.registerAsync({
			global: true,
			imports: [ConfigModule],
			useFactory: (configService: ConfigService) => ({
				secret: configService.getOrThrow<string>('JWT_SECRET')
			}),
			inject: [ConfigService]
		}),
		ScheduleModule.forRoot(),
		PrismaModule,
		AuthModule,
		UserModule,
		MailModule,
		EmailConfirmationModule,
		ToolsModule,
		MachineCncModule,
		WorkOvernightModule,
		FilesModule,
		LearningModule
	]
})
export class AppModule {}
