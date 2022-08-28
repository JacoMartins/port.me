import { prisma } from "../../../prisma";

interface SectionComponent {
  id?: string;
  section_id: string;
  title: string;
  value: number | null;
  type: string;
  description: string;
}

export class PostSectionComponentUseCase {
  async execute ({section_id, title, type, value, description}:SectionComponent){
    const sectionExists = await prisma.sections.findFirst({
      where: {
        id: section_id
      }
    });

    if(!sectionExists) {
      throw new Error("Section missing.");
    }
    
    const component = await prisma.sectionsComponents.create({
        data: {
          title,
          type,
          value,
          description,

          section: {
            connect: {
              id: section_id
            }
          }
        }
    });

    return component;
  }
}