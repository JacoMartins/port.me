import express from 'express';

import { ensureAuthenticated } from './middlewares/ensureAuthentication';
import { AuthenticateAccountController } from './useCases/post/authenticateAccount/authenticateAccountController';
import { RefreshTokenController } from './useCases/post/refreshToken/refreshTokenController';

import { GetAccountController } from './useCases/get/getAccount/getAccountController';
import { GetMeController } from './useCases/get/getMe/getMeController';
import { GetProfile } from './useCases/get/getProfile';
import { GetAllSections } from './useCases/get/getSection';
import { GetSection } from './useCases/get/getSection';
import { GetSectionComponentsController } from './useCases/get/getSectionComponent/getSectionComponentController';
import { GetComponentsItemsController } from './useCases/get/getComponentItems/getComponentItemsController';

import { PutProfileController } from './useCases/put/putProfile/putProfileController';
import { PutSectionController } from './useCases/put/putSection/putSectionController';

import { CreateAccountController } from './useCases/post/postCreateAccount/postCreateAccountController';
import { PostSectionController } from './useCases/post/postSection/postSectionController';
import { PostSectionComponentController } from './useCases/post/postSectionComponent/postSectionComponentController';
import { PostComponentItemController } from './useCases/post/postComponentItem/postComponentItemController';

import { DeleteSectionController } from './useCases/delete/deleteSection/deleteSectionController';
import { PutSectionComponentController } from './useCases/put/putSectionComponent/putSectionComponentController';
import { DeleteSectionComponentController } from './useCases/delete/deleteSectionComponent/deleteSectionComponentController';
import { PutComponentItemController } from './useCases/put/putComponentItem/putComponentItemController';
import { DeleteComponentItemController } from './useCases/delete/deleteComponentItem/deleteComponentItemController';
import { ensureAccountMatchs } from './middlewares/ensureAccountMatchs';

export const routes = express.Router();

const createAccount = new CreateAccountController();
const getAccount = new GetAccountController();

const authAccount = new AuthenticateAccountController();
const refreshToken = new RefreshTokenController();
const getMe = new GetMeController();

const getProfile = new GetProfile();
const putProfile = new PutProfileController();

const getSection = new GetSection();
const putSection = new PutSectionController();
const postSection = new PostSectionController();
const deleteSection = new DeleteSectionController();

const getAllSections = new GetAllSections();

const getSectionComponent = new GetSectionComponentsController();
const putSectionComponent = new PutSectionComponentController();
const deleteSectionComponent = new DeleteSectionComponentController();
const postSectionComponent = new PostSectionComponentController();

const getComponentItems = new GetComponentsItemsController();
const putComponentItem = new PutComponentItemController();
const deleteComponentItem = new DeleteComponentItemController();
const postComponentItem = new PostComponentItemController();

routes.get('/me', ensureAuthenticated, getMe.handle);
routes.post('/auth', authAccount.handle);
routes.post('/refresh-token', refreshToken.handle)

routes.get('/account', getAccount.handle);
routes.post('/accounts', createAccount.handle);

routes.get('/profile', getProfile.handle);
routes.put('/profile', ensureAuthenticated, putProfile.handle);

routes.get('/section', getSection.handle);
routes.post('/section', ensureAuthenticated, ensureAccountMatchs, postSection.handle);
routes.put('/section', ensureAuthenticated, ensureAccountMatchs, putSection.handle);
routes.delete('/section', ensureAuthenticated, ensureAccountMatchs, deleteSection.handle);

routes.get('/section/components', getSectionComponent.handle);
routes.put('/section/components', ensureAuthenticated, ensureAccountMatchs, putSectionComponent.handle);
routes.delete('/section/components', ensureAuthenticated, ensureAccountMatchs, deleteSectionComponent.handle);
routes.post('/section/components', ensureAuthenticated, ensureAccountMatchs, postSectionComponent.handle);

routes.get('/section/component_items', getComponentItems.handle);
routes.post('/section/component_items', ensureAuthenticated, ensureAccountMatchs, postComponentItem.handle);
routes.put('/section/component_items', ensureAuthenticated, ensureAccountMatchs, putComponentItem.handle);
routes.delete('/section/component_items', ensureAuthenticated, ensureAccountMatchs, deleteComponentItem.handle);

routes.get('/sections', getAllSections.handle);


