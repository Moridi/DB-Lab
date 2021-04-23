import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';

@Entity()
export default class EmployerEntity extends BaseEntity {

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
}
