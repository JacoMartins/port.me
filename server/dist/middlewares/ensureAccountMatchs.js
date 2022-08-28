"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAccountMatchs = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const prisma_1 = require("../prisma");
async function ensureAccountMatchs(req, res, next) {
    const authHeader = req.headers.authorization;
    const { profile_id } = req.body;
    if (!authHeader) {
        throw new Error('Not authenticated.');
    }
    const [, token] = authHeader.split(' ');
    const { sub: auth_id } = (0, jsonwebtoken_1.decode)(token);
    const profile = await prisma_1.prisma.profile.findFirst({
        where: {
            account: {
                id: auth_id
            }
        }
    });
    if (!profile) {
        throw new Error('Profile not found.');
    }
    if (profile_id !== profile.id) {
        throw new Error("You can't post in another person profile.");
    }
    next();
}
exports.ensureAccountMatchs = ensureAccountMatchs;
