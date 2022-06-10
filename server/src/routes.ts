import express from 'express';
import { ensureAuthenticated } from './middlewares/ensureAuthentication';
import { AuthenticateAccountController } from './useCases/authenticateAccount/authenticateAccountController';
import { CreateAccountController } from './useCases/createAccount/createAccountController';
import { DeleteSectionController } from './useCases/deleteSection/deleteSectionController';
import { GetAccountController } from './useCases/findAccount/findAccountController';
import { GetMeController } from './useCases/findMe/findMeController';
import { GetProfile } from './useCases/findProfile';
import { GetAllSections } from './useCases/findSection';
import { GetSection } from './useCases/findSection';
import { PostSectionController } from './useCases/postSection/postSectionController';
import { PutProfileController } from './useCases/putProfile/putProfileController';
import { RefreshTokenController } from './useCases/refreshToken/refreshTokenController';

export const routes = express.Router();

const createAccount = new CreateAccountController();
const findAccount = new GetAccountController();
const findProfile = new GetProfile();
const authAccount = new AuthenticateAccountController();
const postSection = new PostSectionController();
const deleteSection = new DeleteSectionController();
const findAllSections = new GetAllSections();
const findSection = new GetSection();
const refreshToken = new RefreshTokenController();
const findMe = new GetMeController();
const putProfile = new PutProfileController();

routes.post('/accounts', createAccount.handle);
routes.get('/account', findAccount.handle);
routes.get('/me', ensureAuthenticated, findMe.handle);

routes.post('/auth', authAccount.handle);
routes.post('/refresh-token', refreshToken.handle)

routes.put('/profile', ensureAuthenticated, putProfile.handle);

routes.post('/section', ensureAuthenticated, postSection.handle);
routes.delete('/section', ensureAuthenticated,deleteSection.handle);

routes.get('/sections', findAllSections.handle);
routes.get('/section', findSection.handle);

routes.get('/profile', findProfile.handle);

