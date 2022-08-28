"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSectionComponentsController = void 0;
const getSectionComponentUseCase_1 = require("./getSectionComponentUseCase");
class GetSectionComponentsController {
    async handle(req, res) {
        const section_id = req.query.section_id;
        const getSectionComponentUseCase = new getSectionComponentUseCase_1.GetSectionComponentsUseCase();
        const result = await getSectionComponentUseCase.execute({
            section_id
        });
        return res.send(result);
    }
}
exports.GetSectionComponentsController = GetSectionComponentsController;
