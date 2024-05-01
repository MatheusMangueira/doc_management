import { AppDataSource } from "../../config/db";
import { UserModel } from "../../models";
import { UserService } from "../services";


export const userServiceIntance = new UserService(
   AppDataSource.getRepository(UserModel)
);