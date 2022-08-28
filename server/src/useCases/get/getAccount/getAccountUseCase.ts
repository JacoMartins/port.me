import { prisma } from "../../../prisma";

export class GetAccountUseCase{
  async execute(id: string){
    const account = await prisma.account.findFirst({
      where: {
        id
      }
    });

    return account;
  }
}