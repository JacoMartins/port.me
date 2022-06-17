import { prisma } from "../../../prisma";

export class DeleteSectionComponentUseCase{
  async execute(id:string){
    const componentExists = await prisma.sectionsComponents.findFirst({
      where: {
        id
      }
    });

    if(!componentExists){
      throw new Error("Component doens't exists");
    }

    await prisma.componentItems.deleteMany({
      where: {
        component_id: id
      }
    });

    await prisma.sectionsComponents.delete({
      where:{
        id
      }
    });

    return componentExists;
  }
}