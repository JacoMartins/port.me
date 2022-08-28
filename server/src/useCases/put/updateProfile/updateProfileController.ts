import { Request, Response } from "express";
import { decode, TokenExpiredError } from "jsonwebtoken";
import { UpdateProfileUseCase } from "./updateProfileUseCase";

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

export class UpdateProfileController {
  async handle(req: Request, res: Response) {
    const { first_name, last_name, greeting, description, /* profile_picture,*/ profile_cover } = req.body;
    const authHeader = req.headers.authorization;

    if(!authHeader){
      throw new Error('Token missing.');
    }

    const [, token] = authHeader.split(' ');

    const {sub:id} = decode(token) as Token;

    const updateProfileUseCase = new UpdateProfileUseCase();

    /*if(!req.file){
      throw new Error('No file was uploaded.');
    }*/

    // const avatarFile = req.file.filename;
    
    const result = await updateProfileUseCase.execute({
      id,
      first_name,
      last_name,
      greeting,
      description,
      // profile_picture: avatarFile,
      profile_cover
    } as IProfile);

    if(!result){
      return res.status(404).json({error: "Profile doesn't exists!"});
    }

    return res.json(result);
  }
}