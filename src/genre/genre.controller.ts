import { Body, Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import GenreService from './genre.service';
import CreateGenreDto from './dto/create-genre.dto';

@Controller('genre')
export default class GenreController {
  constructor(private readonly genreServices: GenreService) {}
  
  @Post()
  postGenre( @Body() genre: CreateGenreDto) {
    return this.genreServices.insert(genre);
  }

  @Get()
  getAll() {
    return this.genreServices.getAllGenre();
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.genreServices.remove(id)
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() genre: CreateGenreDto) {
    return this.genreServices.update(id, genre)
  }
}