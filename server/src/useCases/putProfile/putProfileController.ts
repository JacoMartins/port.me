import { Profile } from "@prisma/client";
import { Request, Response } from "express";
import { decode, TokenExpiredError } from "jsonwebtoken";
import { PutProfileUseCase } from "./putProfileUseCase";

interface IProfile {
  id: string;
  first_name: string;
  last_name: string;
  greeting: string;
  description: string;
  profile_picture: string;
  profile_cover: string;
}

interface Token {
  sub: string;
}

export class PutProfileController {
  async handle(req: Request, res: Response) {
    const { first_name, last_name, greeting, description, profile_picture, profile_cover } = req.body;
    const authHeader = req.headers.authorization;

    if(!authHeader){
      throw new Error('Token missing.');
    }

    const [, token] = authHeader.split(' ');

    const {sub:id} = decode(token) as Token;

    const putProfileUseCase = new PutProfileUseCase();

    const result = putProfileUseCase.execute({
      id,
      first_name,
      last_name,
      greeting,
      description,
      profile_picture,
      profile_cover
    } as IProfile);

    if(!result){
      return res.status(404).json({error: "Profile doesn't exists!"});
    }

    return res.json(result);
  }
}