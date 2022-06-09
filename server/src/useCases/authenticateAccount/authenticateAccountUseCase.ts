import { prisma } from '../../prisma';
import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import auth from '../../config/auth';
import { DateProvider } from '../../functions/DateProviders';

interface IAuthenticateAccount {
  identificator: string;
  password: string;
}

const dateProvider = new DateProvider();

export class AuthenticateAccountUseCase {
  async execute({ identificator, password }: IAuthenticateAccount) {
    //receber username e password
    const { 
      secret_token, 
      expires_in_token, 
      expires_in_refresh_token, 
      expires_refresh_token_days,
      secret_refresh_token
    } = auth;

    const account = await prisma.account.findFirst(
      {
        where: {
          username: identificator,
        }
      }
    );

    // verificar se username é cadastrado

    if (!account) {
      throw new Error("Username or password invalid.")
    }

    // verificar se senha corresponde á do usuário

    const passwordMatchs = await compare(password, account.password);

    if (!passwordMatchs) {
      throw new Error("Username or password invalid.")
    }

    // gerar token

    const refresh_token = sign({ identificator }, secret_refresh_token, {
      subject: account.id,
      expiresIn: expires_in_refresh_token
    });

    const refresh_token_expires_date = dateProvider.addDays(expires_refresh_token_days);

    const refreshToken = await prisma.accountToken.create({
      data: {
        refresh_token,
        expires_date: refresh_token_expires_date,
        created_at: new Date(),

        account_token: {
          connect: {
            id: account.id
          }
        }
      }
    });


    const token = sign({ identificator }, secret_token, {
      subject: account.id,
      expiresIn: expires_in_token
    });

    const tokenReturn = {
      token,
      account: {
        username: account.username,
        email: account.email
      },
      refresh_token
    };

    return tokenReturn;

  }
}