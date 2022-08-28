"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSectionComponentController = void 0;
const deleteSectionComponentUseCase_1 = require("./deleteSectionComponentUseCase");
class DeleteSectionComponentController {
    async handle(req, res) {
        const { id } = req.body;
        const deleteSectionUseCase = new deleteSectionComponentUseCase_1.DeleteSectionComponentUseCase();
        const result = await deleteSectionUseCase.execute(id);
        return res.json(result);
    }
}
exports.DeleteSectionComponentController = DeleteSectionComponentController;
