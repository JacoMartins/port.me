"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateAccountUseCase = void 0;
const prisma_1 = require("../../../prisma");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../../../config/auth"));
const DateProviders_1 = require("../../../functions/DateProviders");
const dateProvider = new DateProviders_1.DateProvider();
class AuthenticateAccountUseCase {
    async execute({ identificator, password }) {
        //receber username e password
        const { secret_token, expires_in_token, expires_in_refresh_token, expires_refresh_token_days, secret_refresh_token } = auth_1.default;
        const account = await prisma_1.prisma.account.findFirst({
            where: {
                OR: [
                    {
                        email: {
                            equals: identificator
                        }
                    },
                    {
                        username: {
                            equals: identificator
                        }
                    }
                ]
            }
        });
        // verificar se username é cadastrado
        if (!account) {
            throw new Error("Username or password invalid.");
        }
        // verificar se senha corresponde á do usuário
        const passwordMatchs = await (0, bcrypt_1.compare)(password, account.password);
        if (!passwordMatchs) {
            throw new Error("Username or password invalid.");
        }
        // gerar token
        const refresh_token = (0, jsonwebtoken_1.sign)({ identificator }, secret_refresh_token, {
            subject: account.id,
            expiresIn: expires_in_refresh_token
        });
        const refresh_token_expires_date = dateProvider.addDays(expires_refresh_token_days);
        const refreshToken = await prisma_1.prisma.accountToken.create({
            data: {
                refresh_token,
                expires_date: refresh_token_expires_date,
                created_at: new Date(),
                account_token: {
                    connect: {
                        id: account.id
                    }
                }
            }
        });
        const token = (0, jsonwebtoken_1.sign)({ identificator }, secret_token, {
            subject: account.id,
            expiresIn: expires_in_token,
        });
        const tokenReturn = {
            token,
            account: {
                username: account.username,
                email: account.email,
            },
            refresh_token
        };
        return tokenReturn;
    }
}
exports.AuthenticateAccountUseCase = AuthenticateAccountUseCase;
