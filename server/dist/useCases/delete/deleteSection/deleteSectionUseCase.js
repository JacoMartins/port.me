"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSectionUseCase = void 0;
const prisma_1 = require("../../../prisma");
class DeleteSectionUseCase {
    async execute(id) {
        const sectionExists = await prisma_1.prisma.sections.findFirst({
            where: {
                id
            }
        });
        if (!sectionExists) {
            throw new Error("Section doens't exists");
        }
        const cascadeDeleting = await Promise.all([
            prisma_1.prisma.componentItems.deleteMany({
                where: {
                    component: {
                        section_id: id
                    }
                }
            }),
            prisma_1.prisma.sectionsComponents.deleteMany({
                where: {
                    section_id: id
                }
            })
        ]);
        cascadeDeleting;
        await prisma_1.prisma.sections.delete({
            where: {
                id
            }
        });
        return sectionExists;
    }
}
exports.DeleteSectionUseCase = DeleteSectionUseCase;
