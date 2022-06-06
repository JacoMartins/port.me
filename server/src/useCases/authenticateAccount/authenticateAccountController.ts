import { Request, Response } from 'express';
import { AuthenticateAccountUseCase } from './authenticateAccountUseCase';

export class AuthenticateAccountController {
  async handle(req: Request, res: Response) {
    const { username, email, password } = req.body;

    const authAccountUseCase = new AuthenticateAccountUseCase();
    const result = await authAccountUseCase.execute({ username, email, password });

    return res.json(result);
  }
}