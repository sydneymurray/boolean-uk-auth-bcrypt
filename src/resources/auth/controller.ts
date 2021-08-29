import {Request, Response, urlencoded} from "express";
import {Users} from "@prisma/client";
import {validateUser} from "./service";

export async function loginUser(req: Request, res: Response){
  const credentials: Users = req.body;
  try {
    const loggedInUser = await validateUser(credentials);
    res.json({user: {id: loggedInUser.id, username: loggedInUser.username}})
  } catch (error) {
    res.status(401).json({error: error.message})  // User not found
  }
}


/*
export const loginUser = async (req: Request, res: Response) => {
  //  Get user credentials
  const userCreds: Users = req.body;

  try {
    // Check if credentials are valid
    const loggedUser = await findUserWithValidation(userCreds);
    // handle result
    res.json({user: {id: loggedUser.id, username: loggedUser.username}});
  } catch (error) {
    res.status(401).json({error: error.message});
  }
}
*/