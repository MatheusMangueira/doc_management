import { Repository } from "typeorm";
import { UserModel } from "../../../models";
import { UserDTO } from "../../../DTOs";
import { hash } from "bcryptjs";
import { rolesServiceIntance } from "../../factorys";

export class UserService {
   constructor(
      private userRepository: Repository<UserModel>) { }

   async create(data: UserDTO) {

      try {

         const passwordHash = await hash(data.password, 8);

         // get all roles
         const roles = await rolesServiceIntance.getAll();
         // get all roles id
         const getDataRoles = data.roles.map(item => item);

         // filter roles and compare with dataFilterRole
         const filterRoles = roles.filter((role) => {
            return getDataRoles.includes(role.id);
         });


         const user = this.userRepository.create({
            ...data,
            password: passwordHash,
            roles: filterRoles

         });


         const createUser = await this.userRepository.save(user);

         return createUser;
      } catch (error) {
         console.log(error, "error from create user");
         throw new Error("Error from create user");
      }
   }

   async getById(id: string) {
      try {

         const user = await this.userRepository.findOne({
            where: { id },
            relations: ["roles"]
         });

         if (!user) {
            throw new Error("User not found");
         }

         return user;

      } catch (error) {
         console.log(error, "error from get user by id");
         throw new Error("Error from get user by id");
      }
   }


}