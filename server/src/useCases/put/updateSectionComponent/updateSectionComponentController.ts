import { Request, Response } from "express";
import { UpdateSectionComponentUseCase } from "./updateSectionComponentUseCase";

export class UpdateSectionComponentController {
  async handle(req: Request, res: Response) {
    const { id, title, value, description, type } = req.body;

    const updateSectionComponentUseCase = new UpdateSectionComponentUseCase();
    const result = await updateSectionComponentUseCase.execute({ id, title, value, description, type });

    return res.send(result);
  }
}