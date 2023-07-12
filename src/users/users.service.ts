import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: mongoose.Model<User>) { }


  // async checkUserAvailability(username: string): Promise<boolean> {
  //   const user = await this.userModel.findById(username);
  //   return !!user;
  // }
  // async findByUsername(username: string): Promise<User[]> {
  //   return this.userModel.findOne({ username })
  // }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const res = await this.userModel.create(createUserDto)
    return res;
  }

  async findAll(): Promise<User[]> {
    const res = await this.userModel.find()
    return res
  }
  // findAll() {
  //   return this.userModel.find()
  // }

  findById(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id)
  }
}
