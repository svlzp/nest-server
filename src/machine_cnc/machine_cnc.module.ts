import { MachineCncController } from './machine_cnc.controller'
import { MachineCncService } from './machine_cnc.service'
import { Module } from '@nestjs/common'
import { FilesModule } from '@/files/files.module'
import { PrismaModule } from '@/prisma/prisma.module'
import { UserModule } from '@/user/user.module'

@Module({
	imports: [PrismaModule, UserModule, FilesModule],
	controllers: [MachineCncController],
	providers: [MachineCncService],
	exports: [MachineCncService]
})
export class MachineCncModule {}
