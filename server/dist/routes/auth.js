"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = __importDefault(require("express"));
const ensureAuthentication_1 = require("../middlewares/ensureAuthentication");
const authenticateAccountController_1 = require("../useCases/post/authenticateAccount/authenticateAccountController");
const refreshTokenController_1 = require("../useCases/post/refreshToken/refreshTokenController");
const getMeController_1 = require("../useCases/get/getMe/getMeController");
const authAccount = new authenticateAccountController_1.AuthenticateAccountController();
const refreshToken = new refreshTokenController_1.RefreshTokenController();
const getMe = new getMeController_1.GetMeController();
exports.auth = express_1.default.Router();
exports.auth.get('/me', ensureAuthentication_1.ensureAuthenticated, getMe.handle);
exports.auth.post('/', authAccount.handle);
exports.auth.post('/refresh-token', refreshToken.handle);
