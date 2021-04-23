import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import ProjectEntity from './project.entity';

@Entity()
export default class FreelancerEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;
  
  @Column({ length: 50 })
  phone_number: string;

  @Column({ length: 50 })
  image_url: string;

  @Column({ length: 50 })
  experience: string;

  @Column({ length: 50 })
  skills: string;

  @Column()
  score: number;

  @Column({ length: 50 })
  registry_type: string;

  @ManyToMany(type => ProjectEntity)
  @JoinTable()
  orders: ProjectEntity[];
}
