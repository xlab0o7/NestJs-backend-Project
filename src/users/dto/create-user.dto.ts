import { PASSWORD } from "../schema/user.schema";

export class CreateUserDto {
    // readonly _id: string;
    readonly username: string;
    readonly password: PASSWORD;
    readonly email: string;

}
