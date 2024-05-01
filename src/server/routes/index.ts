import { Router } from "express";
import { UserController } from "../controllers/user/UserController";


export class AllRouter {
   private router: Router;

   constructor() {
      this.router = Router();
      this.setupRoutes();
   }


   private userRouter() {
      this.router.post("/user", UserController.create);
   }

   private setupRoutes() {
      this.userRouter();
   }

   public getRouter(): Router {
      return this.router;
   }
}