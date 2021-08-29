"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOne = exports.deleteOne = exports.retrieveOne = exports.retrieveAll = exports.createOne = void 0;
// import prisma from "../../utilities/connectionDB"
const service_1 = __importDefault(require("./service"));
//import {Users} from "@prisma/client"
function createOne(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let user = Object.assign({}, req.body);
        let dbResponse = yield service_1.default.create(user);
        res.json(dbResponse);
    });
}
exports.createOne = createOne;
function retrieveAll(req, res) {
    service_1.default.findMany({
        orderBy: { username: "asc" }
    })
        .then((dbResponse) => res.json(dbResponse));
}
exports.retrieveAll = retrieveAll;
function retrieveOne(req, res) {
    let id = Number(req.params.id);
    if (id - id !== 0)
        res.json({ msg: "Page Not Found" });
    service_1.default.findUnique({ where: { id } })
        .then((dbResponse) => res.json(dbResponse));
}
exports.retrieveOne = retrieveOne;
function deleteOne(req, res) {
    let id = Number(req.params.id);
    service_1.default.delete({ where: { id } })
        .then((dbResponse) => res.json(dbResponse));
}
exports.deleteOne = deleteOne;
function updateOne(req, res) {
    let id = Number(req.params.id);
    let user = req.body;
    service_1.default.update({ where: { id }, data: user })
        .then((dbResponse) => res.json(dbResponse));
}
exports.updateOne = updateOne;
/*

export function createOne(req: Request, res: Response){
  let user = {...req.body}
  prisma.users.create({data: user})
    .then((dbResponse: Object) => res.json(dbResponse))
  }

*/ 
