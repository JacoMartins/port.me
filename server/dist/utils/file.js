"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const deleteFile = async (filename) => {
    try {
        fs_1.default.promises.stat((0, path_1.resolve)(__dirname, '..', '..', '..', `./web/tmp/avatar/${filename}`));
    }
    catch {
        return;
    }
    await fs_1.default.promises.unlink((0, path_1.resolve)(__dirname, '..', '..', '..', `./web/tmp/avatar/${filename}`));
};
exports.deleteFile = deleteFile;
