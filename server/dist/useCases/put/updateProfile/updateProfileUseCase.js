"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileUseCase = void 0;
const prisma_1 = require("../../../prisma");
class UpdateProfileUseCase {
    async execute({ id, first_name, last_name, greeting, description, /*profile_picture,*/ profile_cover }) {
        const profileExists = await prisma_1.prisma.profile.findFirst({
            where: {
                account: {
                    id
                }
            }
        });
        console.log(id);
        if (!profileExists) {
            throw new Error("Profile doesn't exists!");
        }
        const [profile, account] = await Promise.all([
            prisma_1.prisma.profile.update({
                where: {
                    username: profileExists.username
                },
                data: {
                    first_name,
                    last_name,
                    greeting,
                    description,
                    // profile_picture: `${profile_picture}`,
                    profile_cover
                }
            }),
            prisma_1.prisma.account.update({
                where: {
                    username: profileExists.username
                },
                data: {
                    first_name,
                    last_name,
                }
            })
        ]);
        return [profile, account];
    }
}
exports.UpdateProfileUseCase = UpdateProfileUseCase;
