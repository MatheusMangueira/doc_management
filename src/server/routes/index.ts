import { Router } from "express";


export class AllRouter {
   private router: Router;

   constructor() {
      this.router = Router();
      this.setupRoutes();
   }


   private setupRoutes() {

   }

   public getRouter(): Router {
      return this.router;
   }
}