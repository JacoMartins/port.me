"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSectionUseCase = void 0;
const prisma_1 = require("../../../prisma");
class UpdateSectionUseCase {
    async execute({ id, title }) {
        const sectionExists = await prisma_1.prisma.sections.findFirst({
            where: {
                id
            }
        });
        if (!sectionExists) {
            throw new Error("Section doesn't exists.");
        }
        const section = await prisma_1.prisma.sections.update({
            where: {
                id
            },
            data: {
                title
            }
        });
        return section;
    }
}
exports.UpdateSectionUseCase = UpdateSectionUseCase;
