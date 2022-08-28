import express from 'express';

import { CreateAccountController } from '../useCases/post/postCreateAccount/postCreateAccountController';
import { GetAccountController } from '../useCases/get/getAccount/getAccountController';

export const account = express.Router();

const createAccount = new CreateAccountController();
const getAccount = new GetAccountController();

account.post('/', createAccount.handle);
account.get('/', getAccount.handle);