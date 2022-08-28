"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSectionComponentUseCase = void 0;
const prisma_1 = require("../../../prisma");
class PostSectionComponentUseCase {
    async execute({ section_id, title, type, value, description }) {
        const sectionExists = await prisma_1.prisma.sections.findFirst({
            where: {
                id: section_id
            }
        });
        if (!sectionExists) {
            throw new Error("Section missing.");
        }
        const component = await prisma_1.prisma.sectionsComponents.create({
            data: {
                title,
                type,
                value,
                description,
                section: {
                    connect: {
                        id: section_id
                    }
                }
            }
        });
        return component;
    }
}
exports.PostSectionComponentUseCase = PostSectionComponentUseCase;
