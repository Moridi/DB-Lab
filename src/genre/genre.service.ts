import { Injectable } from '@nestjs/common';
import CreateGenreDto from './dto/create-genre.dto';
import GenreEntity from '../../db/genre.entity';

@Injectable()
export default class GenreService {
    async insert(genreDetails: CreateGenreDto): Promise<GenreEntity> {

    const genreEntity: GenreEntity = GenreEntity.create();
    const {type} = genreDetails;

    genreEntity.type = type;
    await GenreEntity.save(genreEntity);
    return genreEntity;
  }

  async getAllGenre(): Promise<GenreEntity[]> {
        return await GenreEntity.find();
  }

  async remove(id: number): Promise<any> {
    return await GenreEntity.delete({id});
  }

  async update(id: number, genreDetails: CreateGenreDto): Promise<any> {
    return await GenreEntity.update({id}, genreDetails);
  }
}