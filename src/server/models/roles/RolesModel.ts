import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { v4 as uuid } from "uuid";
import { UserModel } from "../user/UserModel";


@Entity("roles")
@Unique(["name"])
export class RolesModel {
   @PrimaryGeneratedColumn("uuid")
      id: string;

   @Column()
      name: string;

   @Column()
      description: string;

   @ManyToMany(() => UserModel, user => user.roles)
      users: UserModel[];

}