import { Request, Response } from "express";
import { GetSectionComponentsUseCase } from "./getSectionComponentUseCase";

export class GetSectionComponentsController{
  async handle(req:Request, res:Response){
    const section_id = req.query.section_id as string;

    const getSectionComponentUseCase = new GetSectionComponentsUseCase();
    const result = await getSectionComponentUseCase.execute({
      section_id
    });
    
    return res.send(result);
  }
}