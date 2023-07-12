import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum PASSWORD {
    HASHED = 'HASHED',
    SALT_AND_HASH = "SALT&HASH"
}
@Schema(
    { timestamps: true }
)

export class User {
    // @Prop({ type: String, unique: true })
    // _id: string;

    @Prop({ type: String, unique: true })
    username: string;

    @Prop({ type: String, unique: true })
    password: PASSWORD;

    @Prop({ type: String, unique: true })
    email: string;

}

export const UserSchema = SchemaFactory.createForClass(User)
