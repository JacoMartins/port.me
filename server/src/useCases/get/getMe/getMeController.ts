import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import auth from "../../../config/auth";
import { GetMeUseCase } from "./getMeUseCase";

interface Token {
  sub: string;
}

export class GetMeController {
  async handle(req:Request, res:Response){
    const authHeader = req.headers.authorization;

    if(!authHeader){
      throw new Error('Token missing.');
    }

    const [, token] = authHeader.split(' ');

    const { sub: id } = decode(token) as Token;

    const getMeUseCase = new GetMeUseCase();

    const account = await getMeUseCase.execute(id as string);
    
    if(!account){
      throw new Error("Account not found.")
    }

    return res.send(account);
  }
}