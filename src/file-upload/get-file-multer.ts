// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { GridFSBucketReadStream, ObjectId } from 'mongodb';
// import { Connection } from 'mongoose';

// @Injectable()
// export class FileService {
//     private readonly bucketName = 'uploads'; // The name of the MongoDB GridFS bucket

//     constructor(
//         @InjectConnection()
//         private readonly connection: Connection,
//         @InjectRepository(File)
//         private readonly fileRepository: Repository<File>,
//     ) { }

    // async getFileStream(filename: string): Promise<GridFSBucketReadStream> {
    //     const bucket = new this.connection.Connection.db().collection('fs.files');
    //     const file = await bucket.findOne({ filename });

    //     if (!file) {
    //         throw new NotFoundException('File not found');
    //     }

    //     return bucket.openDownloadStream(file._id);
    // }
// }
