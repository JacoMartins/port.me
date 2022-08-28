"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountUseCase = void 0;
const prisma_1 = require("../../../prisma");
const bcrypt_1 = require("bcrypt");
class CreateAccountUseCase {
    async execute({ username, first_name, last_name, email, password }) {
        const accountExists = await prisma_1.prisma.account.findFirst({
            where: {
                username
            }
        });
        if (accountExists) {
            return { error: 'Account already exists!' };
        }
        const user = await prisma_1.prisma.account.create({
            data: {
                first_name,
                last_name,
                email,
                password: await (0, bcrypt_1.hash)(password, 10),
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
        const sections = await prisma_1.prisma.sections.findMany({
            where: {
                profile: {
                    id: (await prisma_1.prisma.profile.findFirst({ where: { account: { id: user.id } } }))?.id
                }
            }
        });
        return sections;
    }
}
exports.CreateAccountUseCase = CreateAccountUseCase;
