"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountController = void 0;
const getAccountUseCase_1 = require("./getAccountUseCase");
class GetAccountController {
    async handle(req, res) {
        const id = req.query.id;
        const getAccountUseCase = new getAccountUseCase_1.GetAccountUseCase();
        const account = await getAccountUseCase.execute(id);
        if (!account) {
            throw new Error("Account not found.");
        }
        return res.send(account);
    }
}
exports.GetAccountController = GetAccountController;
