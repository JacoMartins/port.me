import { prisma } from "../../prisma";

interface Account{
  username?: string;
  email?: string;
  privlevel?: number;
}

export class GetMeUseCase{
  async execute(id: string){
    const {username, email, privlevel} = await prisma.account.findFirst({
      where: {
        id
      }
    }) as Account;

    const filterAccount = {
      username,
      email,
      privlevel
    };

    return filterAccount;
  }
}