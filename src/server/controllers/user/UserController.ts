import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { userServiceIntance } from "../../shared/factorys";
import { UserDTO } from "../../DTOs";


export class UserController {


   static async create(req: Request<{}, {}, UserDTO>, res: Response) {
      try {

         const newUser = await userServiceIntance.create(req.body);

         return res
            .status(StatusCodes.CREATED)
            .json({ newUser });

      } catch (error) {
         return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "user not created" }
            );


      }
   }







}