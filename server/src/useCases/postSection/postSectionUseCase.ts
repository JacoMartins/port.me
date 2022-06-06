import { prisma } from "../../prisma"

interface Section {
  username: any;
  title: string;
}

export class PostSectionUseCase {
  async execute({username, title}: Section) {
    
    
    const section = await prisma.sections.create({
      data: {
        title,
        profile: {
          connect:{
            username
          }
        }
      }
    });
    
    const profile = await prisma.profile.findFirst({
      where: {
        username
      }
    })

    if(!profile){
      throw new Error('Username invalid or missing user.');
    }

    return section;
  }
}