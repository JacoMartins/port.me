import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { PutSectionUseCase } from "./putSectionUseCase";

export class PutSectionController {
  async handle(req:Request, res:Response){
    const {id, title} = req.body;

    const putSectionUseCase = new PutSectionUseCase();

    const result = await putSectionUseCase.execute({id, title});

    return res.json(result);
  }
}