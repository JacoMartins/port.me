import { prisma } from "../../../prisma";

interface SectionComponent {
  id?: string;
  component_id: string;
  title: string;
  value: number | null;
  type: string;
  description: string;
  icon?: string;
  path?: string;
}

export class PostComponentItemUseCase {
  async execute ({component_id, title, type, value, description, icon, path}:SectionComponent){
    const sectionExists = await prisma.sectionsComponents.findFirst({
      where: {
        id: component_id
      }
    });

    if(!sectionExists) {
      throw new Error("Section missing.");
    }
    
    const component = await prisma.componentItems.create({
        data: {
          component_id,
          title,
          type,
          value,
          description,
          icon,
          path
        }
    });

    return component;
  }
}