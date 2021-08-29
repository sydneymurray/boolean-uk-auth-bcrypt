import prisma from "../../utilities/connectionDB";
import {Users} from "@prisma/client";
import {compare} from "bcrypt";

export async function validateUser(userData: Users){
  const foundUser = await prisma.users.findUnique({
    where: {username: userData.username}
  });
 
  if (!foundUser) throw new Error("Incorrect Login Details Provided");
  const validPassword = await compare(userData.password, foundUser.password);

  if (!validPassword) throw new Error("Incorrect Login Details Provided");
  return foundUser;
};
