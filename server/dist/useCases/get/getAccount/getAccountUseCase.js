"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountUseCase = void 0;
const prisma_1 = require("../../../prisma");
class GetAccountUseCase {
    async execute(id) {
        const account = await prisma_1.prisma.account.findFirst({
            where: {
                id
            }
        });
        return account;
    }
}
exports.GetAccountUseCase = GetAccountUseCase;
