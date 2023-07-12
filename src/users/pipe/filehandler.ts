// import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
// import { FileInterceptor } from "@nestjs/platform-express";

// @Controller('files')
// export class FileService {
//  @Post('upload')
//  @UseInterceptors(FileInterceptor('file'))

//  async uploadFile(@UploadedFile() file: Express.Multer.File):Promise<File>{
//     const { originalname, mimetype, buffer } = file;

//     const newFile = new File();
//     newFile.name = originalname;
//     newFile.contentType = mimetype;
//     newFile.data = buffer;

//     return newFile.save();
//  }
