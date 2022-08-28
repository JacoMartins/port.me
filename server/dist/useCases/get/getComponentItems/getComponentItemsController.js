"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetComponentsItemsController = void 0;
const getComponentItemsUseCase_1 = require("./getComponentItemsUseCase");
class GetComponentsItemsController {
    async handle(req, res) {
        const component_id = req.query.component_id;
        const getComponentsItemsUseCase = new getComponentItemsUseCase_1.GetComponentsItemsUseCase();
        const result = await getComponentsItemsUseCase.execute({
            component_id
        });
        return res.send(result);
    }
}
exports.GetComponentsItemsController = GetComponentsItemsController;
