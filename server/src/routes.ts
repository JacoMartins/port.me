import express from 'express';
import { ensureAuthenticated } from './middlewares/ensureAuthentication';
import { AuthenticateAccountController } from './useCases/authenticateAccount/authenticateAccountController';
import { CreateAccountController } from './useCases/createAccount/createAccountController';
import { GetProfile } from './useCases/findProfile';
import { GetAllSections } from './useCases/findSection';
import { GetSection } from './useCases/findSection';
import { PostSectionController } from './useCases/postSection/postSectionController';

export const routes = express.Router();

const createAccount = new CreateAccountController();
const findProfile = new GetProfile();
const authAccount = new AuthenticateAccountController();
const postSection = new PostSectionController();
const findAllSections = new GetAllSections();
const findSection = new GetSection();

routes.post('/accounts', createAccount.handle);

routes.post('/auth', authAccount.handle);

routes.put('/profile');

routes.post('/section', ensureAuthenticated, postSection.handle);

routes.get('/sections', findAllSections.handle);
routes.get('/section', findSection.handle);

routes.get('/profile', findProfile.handle);

