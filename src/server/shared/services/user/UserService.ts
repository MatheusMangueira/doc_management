import { Repository } from "typeorm";
import { UserModel } from "../../../models";
import { UserDTO } from "../../../DTOs";


export class UserService {
   constructor(private userRepository: Repository<UserModel>) { }

   async create(data: UserDTO) {
      try {

         const user = this.userRepository.create({
            ...data
         });

         const createUser = await this.userRepository.save(user);

         return createUser;
      } catch (error) {
         console.log(error, "error from create user");
         throw new Error("Error from create user");
      }
   }


}