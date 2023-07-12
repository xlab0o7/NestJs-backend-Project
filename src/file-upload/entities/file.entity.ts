import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class FileEntity {
    @ObjectIdColumn()
    public id: ObjectId;

    @Column()
    length: string;

    @Column()
    data: Buffer;

    @Column()
    filename: string;

    // @Column()
    // path: string;
}
