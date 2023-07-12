import { PASSWORD } from "../schema/user.schema";

export class UpdateUserDto {

    // readonly _id: string;
    readonly username: string;
    readonly password: PASSWORD;
    readonly email: string;
}