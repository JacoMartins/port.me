"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMeUseCase = void 0;
const prisma_1 = require("../../../prisma");
class GetMeUseCase {
    async execute(id) {
        const { username, email, privlevel } = await prisma_1.prisma.account.findFirst({
            where: {
                id
            }
        });
        const { profile_picture } = await prisma_1.prisma.profile.findFirst({
            where: {
                account: {
                    id
                }
            }
        });
        const filterAccount = {
            username,
            email,
            privlevel,
            profile_picture
        };
        return filterAccount;
    }
}
exports.GetMeUseCase = GetMeUseCase;
