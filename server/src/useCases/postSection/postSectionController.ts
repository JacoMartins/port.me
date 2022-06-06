import { Request, Response } from "express";
import { PostSectionUseCase } from "./postSectionUseCase";

export class PostSectionController{
  async handle(req:Request, res:Response){
    const {username, title} = req.body;

    const postSectionUseCase = new PostSectionUseCase();
    const result = await postSectionUseCase.execute({username, title});

    return res.json(result);
  }
}