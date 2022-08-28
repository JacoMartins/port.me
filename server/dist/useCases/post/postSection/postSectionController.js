"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSectionController = void 0;
const postSectionUseCase_1 = require("./postSectionUseCase");
class PostSectionController {
    async handle(req, res) {
        const { profile_id, title } = req.body;
        const postSectionUseCase = new postSectionUseCase_1.PostSectionUseCase();
        const result = await postSectionUseCase.execute({ profile_id, title });
        return res.json(result);
    }
}
exports.PostSectionController = PostSectionController;
