import { Controller, Get, Post, UploadedFile, UseInterceptors, Res, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService) { }


    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<void> {
        // return this.fileService.uploadFile(file.originalname, file.buffer);
    }
    @Get(':id')
    async getFile(id: string) {
        const file = await this.fileService
        // processFile(id);
        // const file = this.Entityfile.save
        console.log(file)
        return file;
    }
    // @Get(':filename')
    // async getFile(@Param('filename') filename: string, @Res() res: Response): Promise<void> {
    //     const readStream = await this.fileService.getFile(filename);
    //     readStream.pipe(res);
    // }
}
