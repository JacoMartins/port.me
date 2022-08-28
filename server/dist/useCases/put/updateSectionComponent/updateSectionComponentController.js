"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSectionComponentController = void 0;
const updateSectionComponentUseCase_1 = require("./updateSectionComponentUseCase");
class UpdateSectionComponentController {
    async handle(req, res) {
        const { id, title, value, description, type } = req.body;
        const updateSectionComponentUseCase = new updateSectionComponentUseCase_1.UpdateSectionComponentUseCase();
        const result = await updateSectionComponentUseCase.execute({ id, title, value, description, type });
        return res.send(result);
    }
}
exports.UpdateSectionComponentController = UpdateSectionComponentController;
