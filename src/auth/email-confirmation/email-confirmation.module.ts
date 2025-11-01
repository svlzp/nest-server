import { EmailConfirmationController } from './email-confirmation.controller'
import { EmailConfirmationService } from './email-confirmation.service'
import { forwardRef, Module } from '@nestjs/common'
import { MailModule } from '@/libs/mail/mail.module'
import { UserModule } from '@/user/user.module'
import { AuthModule } from '../auth.module'

@Module({
	imports: [MailModule, UserModule, forwardRef(() => AuthModule)],
	controllers: [EmailConfirmationController],
	providers: [EmailConfirmationService],
	exports: [EmailConfirmationService]
})
export class EmailConfirmationModule {}
