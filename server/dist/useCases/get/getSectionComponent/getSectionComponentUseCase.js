"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSectionComponentsUseCase = void 0;
const prisma_1 = require("../../../prisma");
class GetSectionComponentsUseCase {
    async execute({ section_id }) {
        const SectionComponents = await prisma_1.prisma.sectionsComponents.findMany({
            where: {
                section_id
            }
        });
        if (!SectionComponents) {
            throw new Error("Component missing.");
        }
        return SectionComponents;
    }
}
exports.GetSectionComponentsUseCase = GetSectionComponentsUseCase;
