import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export default class ProjectEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column()
  priority: number;

  @Column()
  deadline: Date;

  @Column()
  price: number;

  @Column({ length: 50 })
  min_experience: string;
}
