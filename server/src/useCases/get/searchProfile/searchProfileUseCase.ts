import { prisma } from "../../../prisma";

export class SearchProfileUseCase {
  async execute(typingUsername:string) {
    const profiles = await prisma.profile.findMany({
      take: 10,
      where: {
        OR: [
          {
            username: {
              contains: typingUsername,
              
            }
          },
          {
            first_name: {
              contains: typingUsername,
            }
          },
          {
            last_name: {
              contains: typingUsername,
            }
          }
        ]
      }
    });

    if(!profiles){
      throw new Error('No profiles were found.');
    }

    return profiles;
  }
}