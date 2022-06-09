import { prisma } from '../../prisma';
import { verify,sign } from 'jsonwebtoken';
import auth from '../../config/auth';
import { DateProvider } from '../../functions/DateProviders';

interface IPayLoad {
  sub: string;
  account: {
    username: string;
    email: string;
  };
}

const dateProvider = new DateProvider();

export class RefreshTokenUseCase {
  async execute(token: string){
    const {account, sub} = verify(token, auth.secret_refresh_token) as IPayLoad;
    
    const account_id = sub;

    const account_tokens = await prisma.accountToken.findFirst({
      where:{
        account_id,
        refresh_token: token
      }
    });

    if (!account_tokens){
      throw new Error("Refresh token doesn't exists!");
    }

    await prisma.accountToken.deleteMany({
      where: {
        account_id
      }
    });

    const refresh_token = sign({account.email}, auth.secret_refresh_token, {
      subject: sub,
      expiresIn: auth.expires_in_refresh_token
    });

    const refresh_token_expires_date = dateProvider.addDays(auth.expires_refresh_token_days);

    await prisma.accountToken.create({
      data: {
        created_at: new Date(),
        expires_date: refresh_token_expires_date,
        refresh_token,
        account_id
      }
    });

    return refresh_token;
  }
}