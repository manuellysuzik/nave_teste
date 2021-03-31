import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("Projects")
export default class Projects {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;
  @Column()
  name!: string;
  @Column()
  id_navers!: string
}