"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMeController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const getMeUseCase_1 = require("./getMeUseCase");
class GetMeController {
    async handle(req, res) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new Error('Token missing.');
        }
        const [, token] = authHeader.split(' ');
        const { sub: id } = (0, jsonwebtoken_1.decode)(token);
        const getMeUseCase = new getMeUseCase_1.GetMeUseCase();
        const account = await getMeUseCase.execute(id);
        if (!account) {
            throw new Error("Account not found.");
        }
        return res.send(account);
    }
}
exports.GetMeController = GetMeController;
