"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteComponentItemUseCase = void 0;
const prisma_1 = require("../../../prisma");
class DeleteComponentItemUseCase {
    async execute(id) {
        const itemExists = await prisma_1.prisma.componentItems.findFirst({
            where: {
                id
            }
        });
        if (!itemExists) {
            throw new Error("Section doens't exists");
        }
        await prisma_1.prisma.componentItems.delete({
            where: {
                id
            }
        });
        return itemExists;
    }
}
exports.DeleteComponentItemUseCase = DeleteComponentItemUseCase;
