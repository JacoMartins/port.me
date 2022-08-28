"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.account = void 0;
const express_1 = __importDefault(require("express"));
const postCreateAccountController_1 = require("../useCases/post/postCreateAccount/postCreateAccountController");
const getAccountController_1 = require("../useCases/get/getAccount/getAccountController");
exports.account = express_1.default.Router();
const createAccount = new postCreateAccountController_1.CreateAccountController();
const getAccount = new getAccountController_1.GetAccountController();
exports.account.post('/', createAccount.handle);
exports.account.get('/', getAccount.handle);
