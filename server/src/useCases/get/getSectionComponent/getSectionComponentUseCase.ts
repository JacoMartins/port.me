import { prisma } from "../../../prisma";

interface SectionComponent {
  id?: string;
  section_id: string;
  title?: string;
  value?: number | null;
  type?: string;
  description?: string;
}

export class GetSectionComponentsUseCase {
  async execute ({section_id}:SectionComponent){
    const SectionComponents = await prisma.sectionsComponents.findMany({
      where: {
        section_id
      }
    }) as SectionComponent[];

    if(!SectionComponents) {
      throw new Error("Component missing.");
    }

    return SectionComponents;
  }
}