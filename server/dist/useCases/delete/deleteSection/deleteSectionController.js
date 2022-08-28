"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSectionController = void 0;
const deleteSectionUseCase_1 = require("./deleteSectionUseCase");
class DeleteSectionController {
    async handle(req, res) {
        const { id } = req.body;
        const deleteSectionUseCase = new deleteSectionUseCase_1.DeleteSectionUseCase();
        const result = await deleteSectionUseCase.execute(id);
        return res.json(result);
    }
}
exports.DeleteSectionController = DeleteSectionController;
