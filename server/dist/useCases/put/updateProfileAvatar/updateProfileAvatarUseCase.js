"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileAvatarUseCase = void 0;
const prisma_1 = require("../../../prisma");
class UpdateProfileAvatarUseCase {
    async execute({ account_id, avatar_file }) {
        const profile = await prisma_1.prisma.profile.findFirst({
            where: {
                account: {
                    id: account_id
                }
            }
        });
        if (!profile) {
            throw new Error("Profile doens't exists.");
        }
        const result = await prisma_1.prisma.profile.update({
            where: {
                username: profile.username
            },
            data: {
                profile_picture: avatar_file
            }
        });
        return result;
    }
}
exports.UpdateProfileAvatarUseCase = UpdateProfileAvatarUseCase;
