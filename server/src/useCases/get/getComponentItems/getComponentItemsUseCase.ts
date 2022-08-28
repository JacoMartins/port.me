import { prisma } from "../../../prisma";

interface ComponentItem {
  id?: string;
  component_id: string;
  title?: string;
  value?: number | null;
  type?: string;
  description?: string;
  icon?: string;
  path?: string;
}

export class GetComponentsItemsUseCase {
  async execute ({component_id}:ComponentItem){
    const ComponentItems = await prisma.componentItems.findMany({
      where: {
        component_id
      }
    }) as ComponentItem[];

    if(!ComponentItems) {
      throw new Error("Component missing.");
    }

    return ComponentItems;
  }
}