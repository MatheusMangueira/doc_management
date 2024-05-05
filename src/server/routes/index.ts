import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import { RolesController } from "../controllers/roles/RolesController";
import { SessionController } from "../controllers/session/SessionController";
import { authenticated } from "../shared/middlewares/authenticated/authenticated";
import { Permissions } from "../shared/middlewares";


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

      this.router.get("/roles",
         authenticated(),
         Permissions.is(["admin"]),
         RolesController.getAll);

      this.router.get("/roles/:id", RolesController.getById);
      this.router.put("/roles/:id", RolesController.update);
      this.router.delete("/roles/:id", RolesController.delete);
   }

   private session() {
      this.router.post("/login", SessionController.handle);
   }

   private setupRoutes() {
      this.userRouter();
      this.rolesRouter();
      this.session();
   }

   public getRouter(): Router {
      return this.router;
   }
}