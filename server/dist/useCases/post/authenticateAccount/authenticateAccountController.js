"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateAccountController = void 0;
const authenticateAccountUseCase_1 = require("./authenticateAccountUseCase");
class AuthenticateAccountController {
    async handle(req, res) {
        const { identificator, password } = req.body;
        const authAccountUseCase = new authenticateAccountUseCase_1.AuthenticateAccountUseCase();
        const result = await authAccountUseCase.execute({ identificator, password });
        return res.json(result);
    }
}
exports.AuthenticateAccountController = AuthenticateAccountController;
