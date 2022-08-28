import { prisma } from '../../../prisma';
import { hash } from 'bcrypt';

interface Account {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export class CreateAccountUseCase {
  async execute({ username, first_name, last_name, email, password }: Account) {
    const accountExists = await prisma.account.findFirst({
      where: {
        username
      }
    });

    if (accountExists) {
      return { error: 'Account already exists!' }
    }

    const user = await prisma.account.create({
      data: {
        first_name,
        last_name,
        email,
        password: await hash(password, 10),
        created_at: new Date(),
        priv_level: 0,

        profile: {
          create: {
            username,
            first_name,
            last_name,
            email,
            greeting: 'Olá, me chamo',
            description: 'Insira aqui sua descrição',

            sections: {
              create: {
                title: 'Sobre mim'
              }
            }
          }
        }
      }
    });

    const sections = await prisma.sections.findMany({
      where: {
        profile: {
          id: (await prisma.profile.findFirst({ where: { account: { id: user.id } } }))?.id
        }
      }
    });

    return sections;
  }
}