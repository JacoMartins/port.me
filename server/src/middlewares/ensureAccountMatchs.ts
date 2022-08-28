import { NextFunction, Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { prisma } from "../prisma";

interface Token {
  sub: string;
}

export async function ensureAccountMatchs(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  const { profile_id } = req.body;

  if (!authHeader) {
    throw new Error('Not authenticated.')
  }

  const [, token] = authHeader.split(' ');

  const { sub: auth_id } = decode(token) as Token;

  const profile = await prisma.profile.findFirst({
    where: {
      account: {
        id: auth_id
      }
    }
  })

  if(!profile){
    throw new Error('Profile not found.');
  }

  if(profile_id !== profile.id) {
    throw new Error("You can't post in another person profile.")
  }

  next();
}