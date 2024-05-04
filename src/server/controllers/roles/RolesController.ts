import { Request, Response } from "express";
import { RolesDTO } from "../../DTOs";
import { rolesServiceIntance } from "../../shared/factorys";
import { StatusCodes } from "http-status-codes";
import { Pagination } from "../../types/pagination";



export class RolesController {



   static async create(req: Request<{}, {}, RolesDTO>, res: Response) {

      try {
         const newRoles = await rolesServiceIntance.create(req.body);

         return res
            .status(StatusCodes.CREATED)
            .json({ newRoles });

      } catch (error) {
         return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "roles not created" });
      }
   }


   static async getAll(req: Request<{}, {}, {}, Pagination>, res: Response) {
      try {
         const page = parseInt(req.query.page) || 1;
         const limit = parseInt(req.query.limit) || 10;

         const roles = await rolesServiceIntance.getAll(page, limit);

         return res
            .status(StatusCodes.OK)
            .json({ roles });

      } catch (error) {
         return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "roles not found" });
      }
   }

   static async getById(req: Request<{ id: string }, {}, {}>, res: Response) {
      try {

         const roles = await rolesServiceIntance.getById(req.params.id);

         return res
            .status(StatusCodes.OK)
            .json({ roles });

      } catch (error) {
         return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "roles not found" });
      }
   }

   static async update(req: Request, res: Response) {
      try {

         const { id } = req.params;

         const updateRoles = await rolesServiceIntance.update(id, req.body);

         return res
            .status(StatusCodes.OK)
            .json({ updateRoles });

      } catch (error) {
         return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "roles not updated" });
      }
   }

   static async delete(req: Request, res: Response) {
      try {
         const { id } = req.params;

         await rolesServiceIntance.delete(id);

         return res
            .status(StatusCodes.OK)
            .json({ message: "roles deleted" });

      } catch (error) {
         return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ message: "roles not deleted" });
      }
   }

}