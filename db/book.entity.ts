import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import UserEntity from './user.entity';
import GenreEntity from './genre.entity';

@Entity()
export default class BookEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;
}