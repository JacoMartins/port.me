import express from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthentication';
import { ensureAccountMatchs } from '../middlewares/ensureAccountMatchs';

import { GetSectionComponentsController } from '../useCases/get/getSectionComponent/getSectionComponentController';
import { PostSectionComponentController } from '../useCases/post/postSectionComponent/postSectionComponentController';
import { UpdateSectionComponentController } from '../useCases/put/updateSectionComponent/updateSectionComponentController';
import { DeleteSectionComponentController } from '../useCases/delete/deleteSectionComponent/deleteSectionComponentController';

const getSectionComponent = new GetSectionComponentsController();
const updateSectionComponent = new UpdateSectionComponentController();
const deleteSectionComponent = new DeleteSectionComponentController();
const postSectionComponent = new PostSectionComponentController();

export const components = express.Router();

components.get('/', getSectionComponent.handle);
components.put('/', ensureAuthenticated, ensureAccountMatchs, updateSectionComponent.handle);
components.delete('/', ensureAuthenticated, ensureAccountMatchs, deleteSectionComponent.handle);
components.post('/', ensureAuthenticated, ensureAccountMatchs, postSectionComponent.handle);
