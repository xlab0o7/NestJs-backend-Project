import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/PROJECT')
    , MulterModule
  ],
  providers: [FileService],
  controllers: [FileController]
})
export class FileModule { }
