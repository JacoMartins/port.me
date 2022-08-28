"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSectionComponentUseCase = void 0;
const prisma_1 = require("../../../prisma");
class UpdateSectionComponentUseCase {
    async execute({ id, title, value, type, description }) {
        const componentExists = await prisma_1.prisma.sectionsComponents.findFirst({
            where: {
                id
            }
        });
        if (!componentExists) {
            throw new Error("Couldn't resolve component.");
        }
        const component = await prisma_1.prisma.sectionsComponents.update({
            where: {
                id
            },
            data: {
                title,
                value,
                type,
                description
            }
        });
        return component;
    }
}
exports.UpdateSectionComponentUseCase = UpdateSectionComponentUseCase;
