import { LearningController } from './learning.controller'
import { LearningService } from './learning.service'
import { Module } from '@nestjs/common'
import { FilesModule } from '@/files/files.module'
import { UserModule } from '@/user/user.module'

@Module({
	imports: [FilesModule, UserModule],
	controllers: [LearningController],
	providers: [LearningService]
})
export class LearningModule {}
