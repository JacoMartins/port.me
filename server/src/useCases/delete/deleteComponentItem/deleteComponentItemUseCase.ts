import { prisma } from "../../../prisma";

export class DeleteComponentItemUseCase{
  async execute(id:string){
    const itemExists = await prisma.componentItems.findFirst({
      where: {
        id
      }
    });

    if(!itemExists){
      throw new Error("Section doens't exists");
    }

    await prisma.componentItems.delete({
      where:{
        id
      }
    });

    return itemExists;
  }
}