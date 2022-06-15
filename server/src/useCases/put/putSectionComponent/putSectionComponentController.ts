import { Request, Response } from "express";
import { PutSectionComponentUseCase } from "./putSectionComponentUseCase";

export class PutSectionComponentController {
  async handle(req: Request, res: Response) {
    const { id, title, value, description, type } = req.body;

    const putSectionComponentUseCase = new PutSectionComponentUseCase();
    const result = await putSectionComponentUseCase.execute({ id, title, value, description, type });

    return res.send(result);
  }
}