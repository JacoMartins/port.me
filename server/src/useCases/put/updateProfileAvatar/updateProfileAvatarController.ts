import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { UpdateProfileAvatarUseCase } from "./updateProfileAvatarUseCase";

interface Token {
  sub: string;
}

export class updateProfileAvatarController {
  async handle(req: Request, res: Response) {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
      throw new Error('Not authenticated.');
    }

    const [, token] = authHeader.split(' ');

    const { sub:id } = decode(token) as Token;
    
    if(!req.file) {
      throw new Error("There's no file to upload.");
    }

    const avatarFile = req.file.filename;

    const updateAvatarUseCase = new UpdateProfileAvatarUseCase();
    const result = await updateAvatarUseCase.execute({account_id: id, avatar_file: avatarFile});

    return res.status(204).send(result);
  }
}