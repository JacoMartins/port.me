import { Request, Response } from "express";
import { DeleteSectionComponentUseCase } from "./deleteSectionComponentUseCase";

export class DeleteSectionComponentController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deleteSectionUseCase = new DeleteSectionComponentUseCase();

    const result = await deleteSectionUseCase.execute(id);

    return res.json(result);
  }
}