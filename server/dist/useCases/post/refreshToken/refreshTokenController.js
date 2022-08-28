"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenController = void 0;
const refreshTokenUseCase_1 = require("./refreshTokenUseCase");
class RefreshTokenController {
    async handle(req, res) {
        const token = req.body.token ||
            req.headers["x-access-token"] ||
            req.query.token;
        const refreshTokenUseCase = new refreshTokenUseCase_1.RefreshTokenUseCase();
        const refresh_token = await refreshTokenUseCase.execute(token);
        return res.json(refresh_token);
    }
}
exports.RefreshTokenController = RefreshTokenController;
