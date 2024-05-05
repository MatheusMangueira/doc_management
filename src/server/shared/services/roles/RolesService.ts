import { In, Repository } from "typeorm";
import { RolesModel } from "../../../models";
import { RolesDTO } from "../../../DTOs";


export class RolesService {
   constructor(private repository: Repository<RolesModel>) { }


   async create(data: RolesDTO) {

      try {
         const roles = this.repository.create({
            ...data
         });

         const createRoles = await this.repository.save(roles);

         return createRoles;

      } catch (error) {
         console.log(error, "error from create roles");
         throw new Error("Roles not created");
      }
   }

   async getAll(page: number = 1, limit: number = 10) {

      try {
         const skip = (page - 1) * limit;

         const roles = await this.repository.find({
            skip,
            take: limit
         });

         return roles;

      } catch (error) {
         console.log(error, "error from get all roles");
         throw new Error("Roles not found");
      }

   }

   async getById(id: string) {
      try {
         const roles = await this.repository.findOne({
            where: { id }
         });

         if (!roles) {
            throw new Error("roles not found!");
         }
         return roles;

      } catch (error) {
         console.log(error, "error from get roles by id");
         throw new Error("Roles not found");
      }
   }

   async getByIds(ids: string[]) {
      try {
         const roles = await this.repository.find({
            where: {
               id:
                  In(ids)
            }
         });

         if (!roles) {
            throw new Error("roles not found!");
         }

         return roles;


      } catch (error) {
         console.log(error, "error from get roles by ids");
         throw new Error("Roles not found");
      }
   }


   async update(id: string, data: RolesDTO) {
      try {
         const roles = await this.repository.findOne({
            where: { id: id }
         });

         if (!roles) {
            throw new Error("roles not found!");
         }

         const updateRoles = await this.repository.save({
            ...roles,
            ...data
         });

         return updateRoles;

      } catch (error) {
         console.log(error, "error from update roles");
         throw new Error("Roles not updated");
      }
   }

   async delete(id: string) {
      try {
         const roles = await this.repository.findOne({
            where: { id }
         });

         if (!roles) {
            throw new Error("roles not found!");
         }

         await this.repository.delete(roles);

         return { message: "roles deleted" };

      } catch (error) {
         console.log(error, "error from delete roles");
         throw new Error("Roles not deleted");
      }
   }


}