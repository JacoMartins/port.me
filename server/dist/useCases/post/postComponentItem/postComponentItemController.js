"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostComponentItemController = void 0;
const postComponentItemUseCase_1 = require("./postComponentItemUseCase");
class PostComponentItemController {
    async handle(req, res) {
        const { component_id, title, value, type, description, icon, path } = req.body;
        const postComponentItemsUseCase = new postComponentItemUseCase_1.PostComponentItemUseCase();
        const result = await postComponentItemsUseCase.execute({
            component_id,
            title,
            value,
            type,
            description,
            icon,
            path
        });
        return res.json(result);
    }
}
exports.PostComponentItemController = PostComponentItemController;
