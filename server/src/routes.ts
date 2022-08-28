import express from 'express';

import { account } from './routes/account';
import { auth } from './routes/auth';
import { components } from './routes/components';
import { items } from './routes/items';
import { profile } from './routes/profile';
import { section } from './routes/section';

export const router = express.Router();

router.use('/account', account);
router.use('/auth', auth);
router.use('/components', components);
router.use('/items', items);
router.use('/profile', profile);
router.use('/section', section);