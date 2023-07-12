import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (value.username !== '') {

            return value
        }
        else {

            throw new BadRequestException('Validation failed');
        }

    }
};