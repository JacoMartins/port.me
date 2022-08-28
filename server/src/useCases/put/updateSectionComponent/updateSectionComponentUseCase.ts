import { prisma } from "../../../prisma";

interface ISectionComponent {
  id: string;
  title: string;
  value: number | null;
  type: string;
  description: string;
}

export class UpdateSectionComponentUseCase {
  async execute({ id, title, value, type, description }: ISectionComponent) {
    const componentExists = await prisma.sectionsComponents.findFirst({
      where: {
        id
      }
    });

    if (!componentExists) {
      throw new Error("Couldn't resolve component.");
    }

    const component = await prisma.sectionsComponents.update({
      where: {
        id
      },
      data: {
        title,
        value,
        type,
        description
      }
    });

    return component;
  }
}