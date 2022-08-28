import { prisma } from "../../../prisma"

interface Section {
  profile_id: any;
  title: string;
}

interface Profile {
  username: string;
}

export class PostSectionUseCase {
  async execute({profile_id, title}: Section) {
    const profile = await prisma.profile.findFirst({
      where: {
        id: profile_id
      }
    }) as Profile;
    
    if(!profile){
      throw new Error("Username invalid or missing profile.");
    }

    const section = await prisma.sections.create({
      data: {
        title,
        profile: {
          connect: {
            username: profile.username
          }
        }
      }
    });

    return section;
  }
}