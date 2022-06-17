import { Request, Response } from "express";
import { DeleteSectionUseCase } from "./deleteSectionUseCase";

export class DeleteSectionController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deleteSectionUseCase = new DeleteSectionUseCase();

    const result = await deleteSectionUseCase.execute(id);

    return res.json(result);
  }
}