import express from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthentication';
import { AuthenticateAccountController } from '../useCases/post/authenticateAccount/authenticateAccountController';
import { RefreshTokenController } from '../useCases/post/refreshToken/refreshTokenController';
import { GetMeController } from '../useCases/get/getMe/getMeController';

const authAccount = new AuthenticateAccountController();
const refreshToken = new RefreshTokenController();
const getMe = new GetMeController();

export const auth = express.Router();

auth.get('/me', ensureAuthenticated, getMe.handle);
auth.post('/', authAccount.handle);
auth.post('/refresh-token', refreshToken.handle);