import { Request, Response } from "express";
import { UpdateComponentItemUseCase } from "./updateComponentItemUseCase";

export class UpdateComponentItemController {
  async handle(req: Request, res: Response) {
    const { id, title, value, description, type, icon, path } = req.body;

    const updateComponentItemUseCase = new UpdateComponentItemUseCase();
    const result = await updateComponentItemUseCase.execute({ id, title, value, description, type, icon, path });

    return res.send(result);
  }
}