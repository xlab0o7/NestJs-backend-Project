import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { File } from './schema/file.schema';
// import { Guard } from './guard/user.guard';
// import { ValidationPipe } from './pipe/user.pipe';
// import { UserInterceptor } from './interceptor/user.interceptor';

@Controller('users')
// @UseGuards(Guard)
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body(
    // new ValidationPipe()
  ) createUserDto: CreateUserDto) {
    var post = this.usersService.create(createUserDto);
    return post
  }

  @Get()
  // @UseInterceptors(UserInterceptor)
  async findAll(): Promise<User[]> {
    var user = await this.usersService.findAll();
    return user;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

}
