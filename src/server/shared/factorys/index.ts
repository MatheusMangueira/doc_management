import { AppDataSource } from "../../config/db";
import { RolesModel, UserModel } from "../../models";
import { UserService } from "../services";
import { RolesService } from "../services/roles/RolesService";


export const userServiceIntance = new UserService(
   AppDataSource.getRepository(UserModel),
);

export const rolesServiceIntance = new RolesService(
   AppDataSource.getRepository(RolesModel)
);