import { Request, Response } from "express";
import { PostComponentItemUseCase } from "./postComponentItemUseCase";

interface ComponentItem {
  id: string;
  component_id: string;
  title: string;
  value: number | null;
  type: string;
  description: string;
  icon?: string;
  path?: string;
}

export class PostComponentItemController{
  async handle(req:Request, res:Response){
    const {component_id, title, value, type, description, icon, path} = req.body as ComponentItem;

    const postComponentItemsUseCase = new PostComponentItemUseCase();
    const result = await postComponentItemsUseCase.execute({
      component_id,
      title,
      value,
      type,
      description,
      icon,
      path
    });
    
    return res.json(result);
  }
}