import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { Double } from "typeorm";

@Schema()
export class FileUpload {
    @Prop()
    filename: string;

    @Prop()
    data: Buffer;

    // @Prop()
    // contentType: string;

    // @Prop({ type: String })
    // chunkSize: any;

    @Prop()
    length: string;
}

export const FileSchema = SchemaFactory.createForClass(FileUpload);