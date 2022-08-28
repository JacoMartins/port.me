"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSectionComponentController = void 0;
const postSectionComponentUseCase_1 = require("./postSectionComponentUseCase");
class PostSectionComponentController {
    async handle(req, res) {
        const { section_id, title, value, type, description } = req.body;
        const postSectionComponentUseCase = new postSectionComponentUseCase_1.PostSectionComponentUseCase();
        const result = await postSectionComponentUseCase.execute({
            section_id,
            title,
            value,
            type,
            description
        });
        return res.json(result);
    }
}
exports.PostSectionComponentController = PostSectionComponentController;
