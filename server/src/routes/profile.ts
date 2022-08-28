import express, { Request, Response } from "express";
import fs from "fs";
import multer from "multer";
import { resolve } from "path";
import uploadConfig from "../config/upload";

import { ensureAuthenticated } from "../middlewares/ensureAuthentication";

import { GetProfile } from '../useCases/get/getProfile';
import { SearchProfileController } from "../useCases/get/searchProfile/searchProfileController";
import { UpdateProfileController } from '../useCases/put/updateProfile/updateProfileController';
import { updateProfileAvatarController } from "../useCases/put/updateProfileAvatar/updateProfileAvatarController";

export const profile = express.Router();

const getProfile = new GetProfile();
const updateProfile = new UpdateProfileController();
const searchProfiles = new SearchProfileController();

const updateProfileAvatar = new updateProfileAvatarController();

const uploadAvatar = multer(uploadConfig.upload('./storage/app/public'));

profile.get('/', getProfile.handle);
profile.put('/', ensureAuthenticated, updateProfile.handle);
profile.get('/search', searchProfiles.handle)

profile.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), updateProfileAvatar.handle);