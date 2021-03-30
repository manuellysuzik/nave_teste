import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Naver from './Navers'

@Entity("Projects")
export default class Projects {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;
  @Column()
  name!: string;
  @OneToMany(() => Naver, naver => naver.projects)
  id_navers!: Naver;
}