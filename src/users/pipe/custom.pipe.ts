import { HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { Transform } from 'stream';
// import PDFDocument from 'pdfkit';
import { join } from 'path';

@Injectable()
export class JsonToPdfPipe implements PipeTransform {
    transform(value: any): Transform {
        const filePath = join(process.cwd(), 'output.pdf')
        const transformStream = new Transform({
            objectMode: true,
            transform(chunk, encoding, callback) {
                try {
                    if (typeof chunk !== 'object') {
                        throw new HttpException('Invalid data format. Expected JSON object.', HttpStatus.BAD_REQUEST);
                    }

                    // Convert the JSON data into a PDF file using pdfkit
                    const doc = new callback()
                    // PDFDocument();
                    doc.pipe(createWriteStream(filePath));
                    doc.text(JSON.stringify(chunk));
                    doc.end();
                    callback(null, doc);
                } catch (error) {
                    callback(error, null);
                }
            },
        });

        return transformStream;
    }
}