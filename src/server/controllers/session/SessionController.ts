
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { sessionServiceIntance } from "../../shared/factorys";

export class SessionController {


   static async handle(req: Request, res: Response) {

      try {
         const { email, password } = req.body;

         const user = await sessionServiceIntance.execute({ email, password });

         return res
            .status(StatusCodes.OK)
            .json(user);

      } catch (error) {
         return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "Error in login" });

      }

   }
}