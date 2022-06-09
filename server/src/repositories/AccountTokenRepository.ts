import { prisma } from '../prisma';

interface IAccountTokenRepository{
  refresh_token: string;
  account_id: string;
  expires_date: Date;
  created_at: Date;
}

export class AccountTokenRepository {
  async create({refresh_token, account_id, expires_date, created_at}:IAccountTokenRepository){
    

  }
}