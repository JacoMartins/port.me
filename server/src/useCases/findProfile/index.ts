import { prisma } from '../../prisma';
import { Request, Response } from 'express';

export class GetProfile {
  async handle(req: Request, res: Response) {
    const profile = await prisma.profile.findUnique(
      {
        where: {
          username: req.query.username as string
        }
      }
    );

    if (!profile){
      return res.status(404).send({error: "Profile not found!"})
    }

    return res.send(profile)
  }
}