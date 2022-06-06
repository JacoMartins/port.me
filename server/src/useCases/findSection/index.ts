import { Request, Response } from "express";
import { prisma } from "../../prisma";

export class GetAllSections {
  async handle(req: Request, res: Response) {
    const sections = await prisma.sections.findMany(
      {
        where: {
          username: req.query.username as string
        }
      }
    );

    if (!sections){
      return res.status(200).send({message: "No section yet!"})
    }

    return res.send(sections)
  }
}

export class GetSection {
  async handle(req: Request, res: Response) {
    const section = await prisma.sections.findUnique(
      {
        where: {
          id: req.query.id as string
        }
      }
    );

    if (!section){
      return res.status(404).send({error: "Section not found!"})
    }

    return res.send(section)
  }
}