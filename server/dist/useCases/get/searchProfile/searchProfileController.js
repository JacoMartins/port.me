"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchProfileController = void 0;
const searchProfileUseCase_1 = require("./searchProfileUseCase");
class SearchProfileController {
    async handle(req, res) {
        const usernameContains = req.query.usernameContains;
        const searchProfileUseCase = new searchProfileUseCase_1.SearchProfileUseCase();
        const result = await searchProfileUseCase.execute(usernameContains);
        return res.json(result).status(200);
    }
}
exports.SearchProfileController = SearchProfileController;
