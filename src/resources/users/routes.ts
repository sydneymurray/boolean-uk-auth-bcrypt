import {Router} from "express";
import {createOne, retrieveOne, retrieveAll} from "./controller";

const usersRouter = Router();

usersRouter.get("/", retrieveAll);
usersRouter.post("/", createOne);
usersRouter.get("/:id", retrieveOne);

export default usersRouter;
