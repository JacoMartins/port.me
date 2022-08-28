"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteComponentItemController = void 0;
const deleteComponentItemUseCase_1 = require("./deleteComponentItemUseCase");
class DeleteComponentItemController {
    async handle(req, res) {
        const { id } = req.body;
        const deleteComponentItemUseCase = new deleteComponentItemUseCase_1.DeleteComponentItemUseCase();
        const result = await deleteComponentItemUseCase.execute(id);
        return res.json(result);
    }
}
exports.DeleteComponentItemController = DeleteComponentItemController;
