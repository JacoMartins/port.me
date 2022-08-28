"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSectionComponentUseCase = void 0;
const prisma_1 = require("../../../prisma");
class DeleteSectionComponentUseCase {
    async execute(id) {
        const componentExists = await prisma_1.prisma.sectionsComponents.findFirst({
            where: {
                id
            }
        });
        if (!componentExists) {
            throw new Error("Component doens't exists");
        }
        await prisma_1.prisma.componentItems.deleteMany({
            where: {
                component_id: id
            }
        });
        await prisma_1.prisma.sectionsComponents.delete({
            where: {
                id
            }
        });
        return componentExists;
    }
}
exports.DeleteSectionComponentUseCase = DeleteSectionComponentUseCase;
