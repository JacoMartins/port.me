import { Request, Response } from "express";
import { PutComponentItemUseCase } from "./putComponentItemUseCase";

export class PutComponentItemController {
  async handle(req: Request, res: Response) {
    const { id, title, value, description, type, icon, path } = req.body;

    const putComponentItemUseCase = new PutComponentItemUseCase();
    const result = await putComponentItemUseCase.execute({ id, title, value, description, type, icon, path });

    return res.send(result);
  }
}