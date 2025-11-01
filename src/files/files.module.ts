import { FilesController } from './files.controller'
import { FilesService } from './files.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaModule } from '@/prisma/prisma.module'
import { UserModule } from '@/user/user.module'

@Module({
	imports: [PrismaModule, ConfigModule, UserModule],
	controllers: [FilesController],
	providers: [FilesService],
	exports: [FilesService]
})
export class FilesModule {}
