// import { PartialType } from '@nestjs/mapped-types';
// import { CreateFileUploadDto } from './create-file-upload.dto';
export class UpdateFileUploadDto
// extends PartialType(CreateFileUploadDto) 
{


    readonly name: string;


    readonly contentType: string;


    readonly data: Buffer;


    readonly path: string;
}
