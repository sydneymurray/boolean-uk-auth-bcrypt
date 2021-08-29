"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const usersRouter = express_1.Router();
usersRouter.get("/", controller_1.retrieveAll);
usersRouter.post("/", controller_1.createOne);
usersRouter.get("/:id", controller_1.retrieveOne);
exports.default = usersRouter;
