import {Request, Response} from "express";
import prisma from "../../utilities/connectionDB"
import {hash} from "bcrypt"
import {Users} from "@prisma/client"

async function create(newUser: Users){
  let hashedPassword = await hash(newUser.password,10)  
  let dbResponse = await prisma.users.create({
    data:{...newUser, password: hashedPassword}
  })
  return dbResponse 
}

export default {...prisma.users, create}