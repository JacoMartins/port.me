import express from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthentication';
import { ensureAccountMatchs } from '../middlewares/ensureAccountMatchs';

import { PostComponentItemController } from '../useCases/post/postComponentItem/postComponentItemController';
import { GetComponentsItemsController } from '../useCases/get/getComponentItems/getComponentItemsController';
import { UpdateComponentItemController } from '../useCases/put/updateComponentItem/updateComponentItemController';
import { DeleteComponentItemController } from '../useCases/delete/deleteComponentItem/deleteComponentItemController';

const postComponentItem = new PostComponentItemController();
const getComponentItems = new GetComponentsItemsController();
const updateComponentItem = new UpdateComponentItemController();
const deleteComponentItem = new DeleteComponentItemController();

export const items = express.Router();

items.post('/', ensureAuthenticated, ensureAccountMatchs, postComponentItem.handle);
items.get('/', getComponentItems.handle);
items.put('/', ensureAuthenticated, ensureAccountMatchs, updateComponentItem.handle);
items.delete('/', ensureAuthenticated, ensureAccountMatchs, deleteComponentItem.handle);
