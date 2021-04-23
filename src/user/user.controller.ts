
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @Get(':userID/books')
  getBooks( @Param('userID') iUserID: number ) {
    return this.usersServices.getBooksOfUser(iUserID);
  }
}