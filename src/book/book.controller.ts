import CreateBookDto from './dto/create-book.dto';
import { BookService } from './book.service';
import {  Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('book')
export default class BookController {
  constructor(private readonly bookService: BookService) {}
  @Post('post')
  postGenre(@Body() genre: CreateBookDto) {
    return this.bookService.insert(genre);
  }

  @Get()
  getAll() {
    return this.bookService.getAllBooks();
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.bookService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() genre: CreateBookDto) {
    return this.bookService.update(id, genre);
  }
}