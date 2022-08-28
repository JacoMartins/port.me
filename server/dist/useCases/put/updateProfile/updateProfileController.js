"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const updateProfileUseCase_1 = require("./updateProfileUseCase");
class UpdateProfileController {
    async handle(req, res) {
        const { first_name, last_name, greeting, description, /* profile_picture,*/ profile_cover } = req.body;
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new Error('Token missing.');
        }
        const [, token] = authHeader.split(' ');
        const { sub: id } = (0, jsonwebtoken_1.decode)(token);
        const updateProfileUseCase = new updateProfileUseCase_1.UpdateProfileUseCase();
        /*if(!req.file){
          throw new Error('No file was uploaded.');
        }*/
        // const avatarFile = req.file.filename;
        const result = await updateProfileUseCase.execute({
            id,
            first_name,
            last_name,
            greeting,
            description,
            // profile_picture: avatarFile,
            profile_cover
        });
        if (!result) {
            return res.status(404).json({ error: "Profile doesn't exists!" });
        }
        return res.json(result);
    }
}
exports.UpdateProfileController = UpdateProfileController;
