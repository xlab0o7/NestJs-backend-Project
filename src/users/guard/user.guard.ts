import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Observable } from 'rxjs';
import { Request } from 'express';
// import mongoose from 'mongoose';
// import { User } from '../schema/user.schema';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';
import { ObjectId } from 'mongoose';

@Injectable()
export class Guard implements CanActivate {
    constructor(private readonly userServce: UsersService) { }
    public _id: string = "64a6ab7a2c81b9596b49f6ac";
    async canActivate(context: ExecutionContext,): Promise<boolean> {
        if (this._id) {

            console.log('this is guard');
            return true;
        } else {
            throw new Error('Guard error')
        }
        // const request = context.switchToHttp().getRequest();
        // const user = request.body;
        // const request =

        // request
        // if (!user) {
        //     throw new Error("User not found");
        // } else {
        //     // const isValidUser = await this.userServce.checkUserAvailability(user);
        //     return user
        //     //  isValidUser;
        // }
        // console.log('this is users-Guard ')
    }
}