"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfileAvatarController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const updateProfileAvatarUseCase_1 = require("./updateProfileAvatarUseCase");
class updateProfileAvatarController {
    async handle(req, res) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new Error('Not authenticated.');
        }
        const [, token] = authHeader.split(' ');
        const { sub: id } = (0, jsonwebtoken_1.decode)(token);
        if (!req.file) {
            throw new Error("There's no file to upload.");
        }
        const avatarFile = req.file.filename;
        const updateAvatarUseCase = new updateProfileAvatarUseCase_1.UpdateProfileAvatarUseCase();
        const result = await updateAvatarUseCase.execute({ account_id: id, avatar_file: avatarFile });
        return res.status(204).send(result);
    }
}
exports.updateProfileAvatarController = updateProfileAvatarController;
