import { Request, Response } from "express";
import { PostSectionComponentUseCase } from "./postSectionComponentUseCase";

interface SectionComponent {
  id: string;
  section_id: string;
  title: string;
  value: number | null;
  type: string;
  description: string;
}

export class PostSectionComponentController{
  async handle(req:Request, res:Response){
    const {section_id, title, value, type, description} = req.body as SectionComponent;

    const postSectionComponentUseCase = new PostSectionComponentUseCase();
    const result = await postSectionComponentUseCase.execute({
      section_id,
      title,
      value,
      type,
      description
    });
    
    return res.json(result);
  }
}