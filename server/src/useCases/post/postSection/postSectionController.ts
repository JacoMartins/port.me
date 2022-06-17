import { Request, Response } from "express";
import { decode } from "jsonwebtoken";
import { PostSectionUseCase } from "./postSectionUseCase";

interface Token{
  sub: string;
}

export class PostSectionController{
  async handle(req:Request, res:Response){
    const {profile_id, title} = req.body;

    const postSectionUseCase = new PostSectionUseCase();
    const result = await postSectionUseCase.execute({profile_id, title});

    return res.json(result);
  }
}