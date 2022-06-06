import { prisma } from '../../prisma';
import { Request, Response } from 'express';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateAccount {
  username: string;
  email: string;
  password: string;
}

export class AuthenticateAccountUseCase {
  async execute({ username, email, password }: IAuthenticateAccount) {
    //receber username e password

    const account = await prisma.account.findFirst(
      {
        where: {
          username,
          email
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

    const token = sign({username}, 'aeb014037644e19d124d603ff9b3ed75', {
      subject: account.id,
      expiresIn: "1d"
    });

    const tokenReturn = {
      token,
      authedAccount: {
        username,
        email
      }
    };

    return tokenReturn;

  }
}