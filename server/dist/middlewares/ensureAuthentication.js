"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const prisma_1 = require("../prisma");
const jsonwebtoken_1 = require("jsonwebtoken");
const auth_1 = __importDefault(require("../config/auth"));
async function ensureAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        throw new Error('Token missing');
    }
    const [, token] = authHeader.split(' ');
    try {
        const { sub: account_id } = (0, jsonwebtoken_1.verify)(token, auth_1.default.secret_refresh_token);
        const account_token = await prisma_1.prisma.accountToken.findFirst({
            where: {
                account_id,
                refresh_token: token
            }
        });
        if (!account_token) {
            throw new Error("Token doesn't exists");
        }
        next();
    }
    catch {
        throw new Error('Invalid Web Token');
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
