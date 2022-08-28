"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostComponentItemUseCase = void 0;
const prisma_1 = require("../../../prisma");
class PostComponentItemUseCase {
    async execute({ component_id, title, type, value, description, icon, path }) {
        const sectionExists = await prisma_1.prisma.sectionsComponents.findFirst({
            where: {
                id: component_id
            }
        });
        if (!sectionExists) {
            throw new Error("Section missing.");
        }
        const component = await prisma_1.prisma.componentItems.create({
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
exports.PostComponentItemUseCase = PostComponentItemUseCase;
