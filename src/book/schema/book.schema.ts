import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export enum Category {
    ADVENTURE = 'Adventure',
    CLASSIC = 'Classic',
    CRIME = 'Crime',
    FANTASY = 'Fantasy',
}

@Schema({
    // timestamps: true

})
export class Book {
    @Prop({ type: String, unique: true })
    title: String;

    @Prop()
    author: String;

    @Prop()
    description: String;

    @Prop()
    price: number;

    @Prop()
    category: Category;

}

export const BookSchema = SchemaFactory.createForClass(Book)