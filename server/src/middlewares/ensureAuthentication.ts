import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

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
    const { sub } = verify(token, 'aeb014037644e19d124d603ff9b3ed75') as IPayLoad;
    console.log(`\n${sub}`)

    next();
  } catch {
    throw new Error('Invalid Web Token')
  }
}