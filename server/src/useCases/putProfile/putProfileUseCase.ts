import { prisma } from "../../prisma";

interface IProfile {
  id: string;
  first_name: string;
  last_name: string;
  greeting: string;
  description: string;
  profile_picture: string;
  profile_cover: string;
}

export class PutProfileUseCase{
  async execute({id, first_name, last_name, greeting,description, profile_picture, profile_cover}:IProfile){
    const profileExists = await prisma.profile.findFirst({
      where:{
        account: {
          id
        }
      }
    });

    console.log(id);

    if(!profileExists){
      throw new Error("Profile doesn't exists!")
    }
    
    const profile = await prisma.profile.update({
      where: {
        username: profileExists.username
      },

      data: {
        first_name,
        last_name,
        greeting,
        description,
        profile_picture,
        profile_cover
      }
    });

    return profile;
  }
}