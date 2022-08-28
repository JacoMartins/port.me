import { prisma } from "../../../prisma";

interface ISectionComponent {
  id: string;
  title: string;
  value: number | null;
  type: string;
  description: string;
  icon?: string;
  path?: string;
}

export class UpdateComponentItemUseCase {
  async execute({ id, title, value, type, description, icon, path }: ISectionComponent) {
    const itemExists = await prisma.componentItems.findFirst({
      where: {
        id
      }
    });

    if (!itemExists) {
      throw new Error("Couldn't resolve item.");
    }

    const item = await prisma.componentItems.update({
      where: {
        id
      },
      data: {
        title,
        value,
        type,
        description,
        icon,
        path
      }
    });

    return item;
  }
}