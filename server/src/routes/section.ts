import express from 'express';

import { GetAllSections } from '../useCases/get/getSection';
import { GetSection } from '../useCases/get/getSection';
import { UpdateSectionController } from '../useCases/put/updateSection/updateSectionController';
import { PostSectionController } from '../useCases/post/postSection/postSectionController';
import { DeleteSectionController } from '../useCases/delete/deleteSection/deleteSectionController';
import { ensureAuthenticated } from '../middlewares/ensureAuthentication';
import { ensureAccountMatchs } from '../middlewares/ensureAccountMatchs';

const getSection = new GetSection();
const updateSection = new UpdateSectionController();
const postSection = new PostSectionController();
const deleteSection = new DeleteSectionController();

const getAllSections = new GetAllSections();

export const section = express.Router();

section.get('/', getSection.handle);
section.post('/', ensureAuthenticated, ensureAccountMatchs, postSection.handle);
section.put('/', ensureAuthenticated, ensureAccountMatchs, updateSection.handle);
section.delete('/', ensureAuthenticated, ensureAccountMatchs, deleteSection.handle);

section.get('/all', getAllSections.handle);