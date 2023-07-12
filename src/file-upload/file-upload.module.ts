import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileUploadController } from './file-upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { FileSchema } from './entities/file-upload.entity';
import { UserMiddleware } from 'src/users/middleware/user.middleware';
import { GridFsMulterConfigService } from './multer-storage-engine';
// import { FileEntity } from './entities/file.entity';


@Module({
  imports: [
    MulterModule.registerAsync({ useClass: GridFsMulterConfigService }),
    MongooseModule.forFeature([{ name: 'FileUpload', schema: FileSchema }]),
    // TypeOrmModule.forFeature([FileEntity]),
    TypeOrmModule

  ],
  controllers: [FileUploadController],
  providers: [FileUploadService]
})
export class FileUploadModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware)
      .forRoutes({ path: 'files', method: RequestMethod.ALL });
  }
}
