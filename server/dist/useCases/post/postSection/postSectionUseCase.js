"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSectionUseCase = void 0;
const prisma_1 = require("../../../prisma");
class PostSectionUseCase {
    async execute({ profile_id, title }) {
        const profile = await prisma_1.prisma.profile.findFirst({
            where: {
                id: profile_id
            }
        });
        if (!profile) {
            throw new Error("Username invalid or missing profile.");
        }
        const section = await prisma_1.prisma.sections.create({
            data: {
                title,
                profile: {
                    connect: {
                        username: profile.username
                    }
                }
            }
        });
        return section;
    }
}
exports.PostSectionUseCase = PostSectionUseCase;
