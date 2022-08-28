"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenUseCase = void 0;
const prisma_1 = require("../../../prisma");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../../config/auth"));
const DateProviders_1 = require("../../../functions/DateProviders");
const dateProvider = new DateProviders_1.DateProvider();
class RefreshTokenUseCase {
    async execute(token) {
        const { identificator, sub } = (0, jsonwebtoken_1.verify)(token, auth_1.default.secret_refresh_token);
        // const {email} = await prisma.account.findFirst({
        //   where: {
        //     id: sub
        //   }
        // }) as Account;
        const account_id = sub;
        const account_tokens = await prisma_1.prisma.accountToken.findFirst({
            where: {
                account_id,
                refresh_token: token
            }
        });
        if (!account_tokens) {
            throw new Error("Refresh token doesn't exists!");
        }
        await prisma_1.prisma.accountToken.deleteMany({
            where: {
                account_id
            }
        });
        const refresh_token = (0, jsonwebtoken_1.sign)({ identificator }, auth_1.default.secret_refresh_token, {
            subject: sub,
            expiresIn: auth_1.default.expires_in_refresh_token
        });
        const refresh_token_expires_date = dateProvider.addDays(auth_1.default.expires_refresh_token_days);
        await prisma_1.prisma.accountToken.create({
            data: {
                created_at: new Date(),
                expires_date: refresh_token_expires_date,
                refresh_token,
                account_id
            }
        });
        return refresh_token;
    }
}
exports.RefreshTokenUseCase = RefreshTokenUseCase;
