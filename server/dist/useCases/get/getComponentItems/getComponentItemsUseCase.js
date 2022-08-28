"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComponentsItemsUseCase = void 0;
const prisma_1 = require("../../../prisma");
class GetComponentsItemsUseCase {
    async execute({ component_id }) {
        const ComponentItems = await prisma_1.prisma.componentItems.findMany({
            where: {
                component_id
            }
        });
        if (!ComponentItems) {
            throw new Error("Component missing.");
        }
        return ComponentItems;
    }
}
exports.GetComponentsItemsUseCase = GetComponentsItemsUseCase;
