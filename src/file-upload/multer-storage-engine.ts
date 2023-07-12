import { Injectable } from '@nestjs/common';
import { MulterModuleOptions, MulterOptionsFactory } from '@nestjs/platform-express';
import { GridFsStorage } from 'multer-gridfs-storage';

@Injectable()
export class GridFsMulterConfigService implements MulterOptionsFactory {
    createMulterOptions(): MulterModuleOptions {
        const storage = new GridFsStorage({
            url: 'mongodb://127.0.0.1:27017/PROJECT', // Replace with your MongoDB connection URL
            file: (req, file) => {
                return new Promise((resolve, reject) => {
                    const filename = file.originalname;
                    const fileInfo = {
                        filename: filename,
                        bucketName: "fileuploads"
                    };
                    resolve(fileInfo);
                });
            },
        });

        return { storage };
    }

}
    // file: (req, file) => {
    //     return {
    //         filename: file.originalname,
    //         contentType: file.mimetype,
    //         metadata: {
    //             author: 'Zain',
    //             dateCreated: new Date()

    //         },
    //         fileSize: file.size
    //         ,
    //         bucketName: 'uploads', // The name of the MongoDB GridFS bucket to store the files
    //     };
    // }
    // ,

    // });