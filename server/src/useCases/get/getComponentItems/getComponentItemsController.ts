import { Request, Response } from "express";
import { GetComponentsItemsUseCase } from "./getComponentItemsUseCase";

export class GetComponentsItemsController{
  async handle(req:Request, res:Response){
    const component_id = req.query.component_id as string;

    const getComponentsItemsUseCase = new GetComponentsItemsUseCase();
    const result = await getComponentsItemsUseCase.execute({
      component_id
    });
    
    return res.send(result);
  }
}