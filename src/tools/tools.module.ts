import { ToolsController } from './tools.controller'
import { ToolsService } from './tools.service'
import { Module } from '@nestjs/common'
import { FilesModule } from '@/files/files.module'
import { PrismaModule } from '@/prisma/prisma.module'
import { UserModule } from '@/user/user.module'

@Module({
	imports: [PrismaModule, FilesModule, UserModule],
	controllers: [ToolsController],
	providers: [ToolsService],
	exports: [ToolsService]
})
export class ToolsModule {}
