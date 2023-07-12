import { Injectable } from '@nestjs/common';
import { GridFSBucket, ObjectId } from 'mongodb';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import * as fs from 'fs';
// import {  } from 'mongodb';

@Injectable()
export class FileService {
    // private gridFSBucket: GridFSBucket;
    // private gridFsBucket: any;
    constructor(
        // @InjectModel('FileUpload') private readonly yourModel: Model<any>,
        // @InjectConnection() private readonly connection: Connection
    ) {
        // this.gridFSBucket = new GridFSBucket(
        // this.connection.config(
        //     process.env['MONGODB_URI'] || 'mongodb://localhost/' + "PROJECT"
        // )
        // , 
        //     {
        //     bucketName: 'PROJECT',
        // }
        // );

    }
    // async getFileBytes(fileId: string): Promise<Buffer> {
    //     const objectId = new ObjectId(fileId);
    //     const fileStream = this.gridFSBucket.openDownloadStream(objectId);
    //     const chunks: Buffer[] = [];

    //     return new Promise<Buffer>((resolve, reject) => {
    //         fileStream.on('data', (chunk: Buffer) => chunks.push(chunk));
    //         fileStream.on('error', reject);
    //         fileStream.on('end', () => resolve(Buffer.concat(chunks)));
    //     });
    // }

    // async convertBytesToFile(bytes: Buffer, filePath: string): Promise<void> {
    //     return new Promise<void>((resolve, reject) => {
    //         fs.writeFile(filePath, bytes, (error) => {
    //             if (error) {
    //                 reject(error);
    //             } else {
    //                 resolve();
    //             }
    //         });
    //     });
    // }

    // async processFile(fileId: string): Promise<void> {
    //     try {
    //         const bytes = await this.getFileBytes(fileId);
    //         await this.convertBytesToFile(bytes, 'path/to/save/file.extension');
    //         console.log('File converted and saved successfully!');
    //     } catch (error) {
    //         console.error('An error occurred while processing the file:', error);
    //     }
    // }

    // async uploadFile(filename: string, buffer: Buffer): Promise<void> {
    //     const uploadStream = this.gridFsBucket.openUploadStream(filename);
    //     const readStream = createReadStream(buffer);
    //     readStream.pipe(uploadStream);
    // }
    // async getFile(filename: string): Promise<GridFSBucketReadStream> {
    //     return this.gridFsBucket.openDownloadStreamByName(filename);
    // }
}
