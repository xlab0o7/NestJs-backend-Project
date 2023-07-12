import { Injectable, NotFoundException } from '@nestjs/common';
// import { CreateFileUploadDto } from './dto/create-file-upload.dto';
// import { UpdateFileUploadDto } from './dto/update-file-upload.dto';
// import * as mongoose from 'mongoose';
// import { GridFSBucketReadStream } from 'mongodb';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { FileUpload } from './entities/file-upload.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import mongoose, { Model } from 'mongoose';
import { GridFSBucket } from 'mongodb';
import { request } from 'express';
// import { Readable } from 'stream';
// import { DatabaseFileService } from './database-file-service';

// import { from } from 'responselike';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Respository } from 'typeorm'
// import { FileEntity } from './entities/file.entity';
// import { GridFile } from 'multer-gridfs-storage';
// import { GridFsMulterConfigService } from './multer-storage-engine';
@Injectable()
export class FileUploadService {
  private readonly bucket: GridFSBucket;
  //  constructor(@InjectModel('Upload') private readonly uploadModel: Model<FileUpload>) {
  // this.bucket = new GridFSBucket(uploadModel.db.db);
  constructor(
    // @InjectModel(FileUpload.name)
    // private fileModel: mongoose.Model<FileUpload>,
    // @InjectRepository(FileUpload)
    // private readonly fileRepo: FileUpload,
    // private readonly DbService: DatabaseFileService
  ) { }


  // async addFile(TypeBuffer: Buffer, filename: string) {
  //   const Files = await this.DbService.uploadDbFile(TypeBuffer, filename);
  // await this.fileRepo.update(id, {
  //   Id: Files.id
  // });
  // return Files;
  // }

  // async saveData(save_Buf: Buffer){
  //   await this.fileRepo.save({})
  // }
  // getFile() {
  //   return this.fileModel.find();
  // this.bucket.openDownloadStream
  // console.log(file)
  // }

  // async getFileStream(filename: string): Promise<GridFSBucketReadStream> {
  // return from(this.fileRepository.findOne({})).pipe(map(filename))
  // const bucket = new this.connection.collection('files');
  // const file = await bucket.findOne({ filename });
  // const file = await this.fileRepository.findOne({ filename });
  // return Readable.from([FileUpload.Buffer])
  //
  // }

  // create(createFileUploadDto: CreateFileUploadDto): Promise<any> {
  //   return this.fileModel.create(createFileUploadDto);
  // }

  // async findAll() {
  //   const res = await this.fileModel.find().exec();
  //   // console.log(res)
  //   return res
  // }

  // async getAll() {
  //   return this.fileModel.find()
  // }
  // findOne(id: number) {
  //   return this.fileModel.findById(id)
  //   // return `This action returns a #${id} fileUpload`;
  // }

  // update(id: number, updateFileUploadDto: UpdateFileUploadDto) {
  //   return this.fileModel.findByIdAndUpdate(id, updateFileUploadDto);
  //   // return `This action updates a #${id} fileUpload`;
  // }

  // remove(id: number) {
  //   return this.fileModel.findByIdAndDelete(id)
  //   // return `This action removes a #${id} fileUpload`;
  // }

  //   private readonly bucketName = 'uploads';
  //   constructor(
  // // @InjectConnection() private readonly connection: Connection,
  //    @InjectRepository(File) private readonly fileRepository: Repository<FileEntity>
  //   ) {}

  //   async getFileStream(filename: string): Promise<GridFsMulterConfigService> {
  //     const bucket = new this.connection.mongoConnection.db().collection('fs.files');
  //     const file = await bucket.findOne({ filename });
  //     if (!file) {
  //       throw new NotFoundException('File not found');
  //     }

  //     return bucket.openDownloadStream(file._id);

  // }
  // }
}