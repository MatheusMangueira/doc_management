import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
@Unique(["email"])
export class UserModel {

   @PrimaryGeneratedColumn("uuid")
      id: string;

   @Column()
      name: string;

   @Column()
      email: string;

   @Column()
      password: string;

   @Column()
      role: string;
}