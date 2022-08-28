"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSectionController = void 0;
const updateSectionUseCase_1 = require("./updateSectionUseCase");
class UpdateSectionController {
    async handle(req, res) {
        const { id, title } = req.body;
        const updateSectionUseCase = new updateSectionUseCase_1.UpdateSectionUseCase();
        const result = await updateSectionUseCase.execute({ id, title });
        return res.json(result);
    }
}
exports.UpdateSectionController = UpdateSectionController;
