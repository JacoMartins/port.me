import { Request, Response } from "express";
import { DeleteComponentItemUseCase } from "./deleteComponentItemUseCase";

export class DeleteComponentItemController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deleteComponentItemUseCase = new DeleteComponentItemUseCase();

    const result = await deleteComponentItemUseCase.execute(id);

    return res.json(result);
  }
}