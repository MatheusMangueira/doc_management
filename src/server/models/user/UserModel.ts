import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";
import { v4 as uuid } from "uuid";
import { RolesModel } from "../roles/RolesModel";

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

   @ManyToMany(() => RolesModel)
   @JoinTable({
      name: "users_roles",
      joinColumn: {
         name: "user_id",
         referencedColumnName: "id"
      },
      inverseJoinColumn: {
         name: "role_id",
         referencedColumnName: "id"
      }
   })
      roles: RolesModel[];
}