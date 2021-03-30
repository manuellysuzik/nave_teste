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
  @ManyToOne(() => User, user => user.id_navers)
  id_user!: User;
  @OneToMany(() => Projects, projects => projects.id_navers)
  projects!: Projects[];

}