import { prisma } from "../../../prisma";

interface Section {
  id: string;
  title: string;
}

export class UpdateSectionUseCase {
  async execute({id, title}:Section) {
    const sectionExists = await prisma.sections.findFirst({
      where: {
        id
      }
    });

    if(!sectionExists){
      throw new Error("Section doesn't exists.")
    }

    const section = await prisma.sections.update({
      where: {
        id
      },
      data: {
        title
      }
    });

    return section;
  }
}