import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import { RolesController } from "../controllers/roles/RolesController";


export class AllRouter {
   private router: Router;

   constructor() {
      this.router = Router();
      this.setupRoutes();
   }


   private userRouter() {
      this.router.post("/user", UserController.create);
   }

   private rolesRouter() {
      this.router.post("/roles", RolesController.create);
      this.router.get("/roles", RolesController.getAll);
      this.router.get("/roles/:id", RolesController.getById);
      this.router.put("/roles/:id", RolesController.update);
      this.router.delete("/roles/:id", RolesController.delete);
   }

   private setupRoutes() {
      this.userRouter();
      this.rolesRouter();
   }

   public getRouter(): Router {
      return this.router;
   }
}