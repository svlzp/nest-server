import { WorkOvernightController } from './work_overnight.controller'
import { WorkOvernightService } from './work_overnight.service'
import { Module } from '@nestjs/common'
import { PrismaModule } from '@/prisma/prisma.module'
import { UserModule } from '@/user/user.module'

@Module({
	imports: [PrismaModule, UserModule],
	controllers: [WorkOvernightController],
	providers: [WorkOvernightService],
	exports: [WorkOvernightService]
})
export class WorkOvernightModule {}
