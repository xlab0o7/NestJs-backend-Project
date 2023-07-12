// import { Injectable, NotFoundException } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm';
// import { FileEntity } from './entities/file.entity';
// import { Repository, ObjectId } from 'typeorm';


// @Injectable()
// class DatabaseFileService {
//     constructor(
//         @InjectRepository(FileEntity)
//         private dbFileRepo: Repository<FileEntity>,
//     ) { }
//     async uploadDbFile(dataBuffer: Buffer, filename: string) {
//         const newFile = await this.dbFileRepo.create({ filename, data: dataBuffer })
//         await this.dbFileRepo.save(newFile);
//         return newFile;
//     }

//     async getFileById(id: ObjectId) {
//         const file = await this.dbFileRepo.findOne(Object(id));
//         if (!file) {
//             throw new NotFoundException();
//         }
//         return file;
//     }

// }