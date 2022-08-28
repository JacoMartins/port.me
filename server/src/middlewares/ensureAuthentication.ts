import { prisma } from "../prisma";
import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';
import auth from "../config/auth";

interface IPayLoad{
  sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing')
  }

  const [, token] = authHeader.split(' ');

  
  try {
    const { sub: account_id } = verify(token, auth.secret_refresh_token) as IPayLoad;
    
    const account_token = await prisma.accountToken.findFirst({
      where: {
        account_id,
        refresh_token: token
      }
    });

    if(!account_token){
      throw new Error("Token doesn't exists");
    }

    next();
  } catch {
    throw new Error('Invalid Web Token')
  }
}