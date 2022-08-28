import { Request, Response } from "express";
import { RefreshTokenUseCase } from "./refreshTokenUseCase";

export class RefreshTokenController {
  async handle(req: Request, res: Response) {
    const token =
      req.body.token ||
      req.headers["x-access-token"] ||
      req.query.token;

    const refreshTokenUseCase = new RefreshTokenUseCase();

    const refresh_token = await refreshTokenUseCase.execute(token);

    return res.json(refresh_token);
  }
}