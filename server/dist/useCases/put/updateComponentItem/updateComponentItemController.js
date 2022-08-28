"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateComponentItemController = void 0;
const updateComponentItemUseCase_1 = require("./updateComponentItemUseCase");
class UpdateComponentItemController {
    async handle(req, res) {
        const { id, title, value, description, type, icon, path } = req.body;
        const updateComponentItemUseCase = new updateComponentItemUseCase_1.UpdateComponentItemUseCase();
        const result = await updateComponentItemUseCase.execute({ id, title, value, description, type, icon, path });
        return res.send(result);
    }
}
exports.UpdateComponentItemController = UpdateComponentItemController;
