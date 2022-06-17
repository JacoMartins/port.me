import { Request, Response } from "express";
import { GetAccountUseCase } from "./getAccountUseCase";

export class GetAccountController {
  async handle(req:Request, res:Response){
    const id = req.query.id;

    const getAccountUseCase = new GetAccountUseCase();

    const account = await getAccountUseCase.execute(id as string);
    
    if(!account){
      throw new Error("Account not found.")
    }

    return res.send(account);
  }
}