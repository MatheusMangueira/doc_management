import express from "express";
import { AllRouter } from "./routes";

const router = new AllRouter().getRouter();

export const App = express();

App.use(express.json());
App.use(router);