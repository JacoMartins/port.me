import { prisma } from "../../../prisma";

interface Account{
  username?: string;
  email?: string;
  privlevel?: number;
}

interface Profile {
  id: string;
  first_name: string;
  last_name: string;
  greeting: string;
  description: string;
  profile_picture: string;
  profile_cover: string;
}

export class GetMeUseCase{
  async execute(id: string){
    const {username, email, privlevel} = await prisma.account.findFirst({
      where: {
        id
      }
    }) as Account;

    const {profile_picture} = await prisma.profile.findFirst({
      where:{
        account: {
          id
        }
      }
    }) as Profile;

    const filterAccount = {
      username,
      email,
      privlevel,
      profile_picture
    };

    return filterAccount;
  }
}