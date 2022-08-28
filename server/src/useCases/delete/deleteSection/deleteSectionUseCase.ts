import { prisma } from "../../../prisma";

export class DeleteSectionUseCase {
  async execute(id: string) {
    const sectionExists = await prisma.sections.findFirst({
      where: {
        id
      }
    });

    if (!sectionExists) {
      throw new Error("Section doens't exists");
    }

    const cascadeDeleting = await Promise.all([
      prisma.componentItems.deleteMany({
        where: {
          component: {
            section_id: id
          }
        }
      }),
      prisma.sectionsComponents.deleteMany({
        where: {
          section_id: id
        }
      })
    ])

    cascadeDeleting;

    await prisma.sections.delete({
      where: {
        id
      }
    });

    return sectionExists;
  }
}