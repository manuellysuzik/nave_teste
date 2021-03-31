import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from './User'
import Projects from './Projects'


@Entity("Navers")
export default class Navers {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;
  @Column()
  name!: string;
  @Column()
  birthdate!: Date;
  @Column()
  admission_date!: Date;
  @Column()
  job_role!: string;
  @Column()
  id_user!: string;
}