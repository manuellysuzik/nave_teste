import bcrypt from 'bcrypt'
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Navers from './Navers'

@Entity("Users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id!: string;
  @Column()
  email!: string;
  @Column()
  password!: string;

  @BeforeInsert()
  generateHash() {
    if (this.password) {
      this.password = bcrypt.hashSync(this.password, 8)
    }
  }

}