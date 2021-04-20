import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export default class GenreEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

}