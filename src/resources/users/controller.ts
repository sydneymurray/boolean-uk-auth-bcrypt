
import {Request, Response} from "express";
// import prisma from "../../utilities/connectionDB"
import users from "./service"
//import {Users} from "@prisma/client"

export async function createOne(req: Request, res: Response){
  let user = {...req.body}
  let dbResponse = await users.create(user)
  res.json(dbResponse)
  }

export function retrieveAll(req: Request, res: Response){
  users.findMany({ 
    orderBy: {username: "asc"}})
    .then((dbResponse: Object) => res.json(dbResponse))
}

export function retrieveOne(req: Request, res: Response){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  users.findUnique({where: {id}})
    .then((dbResponse: Object | null)=> res.json(dbResponse))
}

export function deleteOne(req: Request, res: Response){
  let id = Number(req.params.id)
  users.delete({where: {id}})
    .then((dbResponse: Object) => res.json(dbResponse))
}

export function updateOne(req: Request, res: Response){
  let id = Number(req.params.id)
  let user = req.body
  users.update({where: {id}, data: user})
    .then((dbResponse: Object) => res.json(dbResponse))
}


/*

export function createOne(req: Request, res: Response){
  let user = {...req.body}
  prisma.users.create({data: user})
    .then((dbResponse: Object) => res.json(dbResponse))
  }

*/