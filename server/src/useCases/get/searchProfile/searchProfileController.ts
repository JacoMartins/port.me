import { Request, Response } from "express";
import { SearchProfileUseCase } from "./searchProfileUseCase";

export class SearchProfileController {
  async handle(req:Request, res:Response) {
    const usernameContains = req.query.usernameContains;

    const searchProfileUseCase = new SearchProfileUseCase();
    const result = await searchProfileUseCase.execute(usernameContains as string);

    return res.json(result).status(200);
  }
}