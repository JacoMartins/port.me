import { Request, Response } from 'express';
import { CreateAccountUseCase } from './postCreateAccountUseCase';

export class CreateAccountController {
  async handle(req: Request, res: Response) {
    const { username, first_name, last_name, email, password } = req.body;

    const createAccountUseCase = new CreateAccountUseCase();
    const result = await createAccountUseCase.execute({ username, first_name, last_name, email, password });

    return res.json(result);
  }
}