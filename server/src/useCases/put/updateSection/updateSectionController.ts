import { Request, Response } from "express";
import { UpdateSectionUseCase } from "./updateSectionUseCase";

export class UpdateSectionController {
  async handle(req:Request, res:Response){
    const {id, title} = req.body;

    const updateSectionUseCase = new UpdateSectionUseCase();

    const result = await updateSectionUseCase.execute({id, title});

    return res.json(result);
  }
}