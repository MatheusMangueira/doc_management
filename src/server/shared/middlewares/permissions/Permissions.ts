import { Repository } from "typeorm";
import { RolesModel, UserModel } from "../../../models";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { rolesServiceIntance, userServiceIntance } from "../../factorys";


export class Permissions {

   static is(rolesRouter: string[]) {
      return async (request: Request, response: Response, next: NextFunction) => {
         const { userId } = request;

         if (!userId) {
            return response.status(StatusCodes.BAD_REQUEST).json({ error: "User not permission" });
         }

         const user = await userServiceIntance.getById(userId);

         if (user) {
            const userIds = user.roles.map(role => role.id);

            const roles = await rolesServiceIntance.getByIds(userIds);


            if (roles.map(item => item.name).includes("admin")) {
               return next();
            }

            const roleExists = roles.map(item => item.name).
               some((role) => rolesRouter.includes(role));

            if (!roleExists) {
               return response.status(StatusCodes.BAD_REQUEST).json({ error: "User not permission" });
            }

            return next();
         }
      };
   }
}