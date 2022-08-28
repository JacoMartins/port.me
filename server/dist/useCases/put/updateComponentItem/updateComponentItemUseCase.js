"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComponentItemUseCase = void 0;
const prisma_1 = require("../../../prisma");
class UpdateComponentItemUseCase {
    async execute({ id, title, value, type, description, icon, path }) {
        const itemExists = await prisma_1.prisma.componentItems.findFirst({
            where: {
                id
            }
        });
        if (!itemExists) {
            throw new Error("Couldn't resolve item.");
        }
        const item = await prisma_1.prisma.componentItems.update({
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
exports.UpdateComponentItemUseCase = UpdateComponentItemUseCase;
