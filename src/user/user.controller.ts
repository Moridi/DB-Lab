
import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly usersServices: UserService) {}

  @Post()
  postUser( @Body() user: CreateUserDto) {
    return this.usersServices.insert(user);
  }

  @Get()
  getAll() {
    return this.usersServices.getAllUsers();
  }

  @Get(':id/books')
  getBooks( @Param('id') id: number ) {
    return this.usersServices.getBooksOfUser(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.usersServices.remove(id)
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() genre: CreateUserDto) {
    return this.usersServices.update(id, genre)
  }
}