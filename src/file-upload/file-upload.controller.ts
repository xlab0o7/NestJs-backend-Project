import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res, Query, Req, Response } from '@nestjs/common';
import { FileUploadService } from './file-upload.service';
import { FileInterceptor } from "@nestjs/platform-express";
import { GridFsStorage } from 'multer-gridfs-storage/lib/gridfs';
// import { response } from 'express';
// import { File } from 'buffer';
import { getFileInfo } from 'prettier';
import { request } from 'express';
import { FileEntity } from './entities/file.entity';
import { Repository } from 'typeorm';
import { FileService } from 'src/file/file.service';
import { ObjectId } from 'mongodb';

@Controller('files')
export class FileUploadController {
  // gridFsService: GridFsStorage;
  constructor(
    // private readonly fileUploadService: FileService
    // ,
    // private Entityfile: Repository<FileEntity>
  ) { }

  // @Post()
  // async addfile(@UploadedFile() file: Express.Multer.File) {
  //   return this.fileUploadService.addFile(file.buffer, file.filename)
  // }
  // @Post()
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log(file.buffer);

  // }
  // @Get(':id')
  // async getFile(id: string) {
  //   const file = await this.fileUploadService.processFile(id);
  //   // const file = this.Entityfile.save
  //   console.log(file)
  //   return file;
  // }
}