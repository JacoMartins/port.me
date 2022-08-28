"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountController = void 0;
const postCreateAccountUseCase_1 = require("./postCreateAccountUseCase");
class CreateAccountController {
    async handle(req, res) {
        const { username, first_name, last_name, email, password } = req.body;
        const createAccountUseCase = new postCreateAccountUseCase_1.CreateAccountUseCase();
        const result = await createAccountUseCase.execute({ username, first_name, last_name, email, password });
        return res.json(result);
    }
}
exports.CreateAccountController = CreateAccountController;
