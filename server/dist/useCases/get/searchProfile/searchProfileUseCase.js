"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchProfileUseCase = void 0;
const prisma_1 = require("../../../prisma");
class SearchProfileUseCase {
    async execute(typingUsername) {
        const profiles = await prisma_1.prisma.profile.findMany({
            take: 10,
            where: {
                OR: [
                    {
                        username: {
                            contains: typingUsername,
                        }
                    },
                    {
                        first_name: {
                            contains: typingUsername,
                        }
                    },
                    {
                        last_name: {
                            contains: typingUsername,
                        }
                    }
                ]
            }
        });
        if (!profiles) {
            throw new Error('No profiles were found.');
        }
        return profiles;
    }
}
exports.SearchProfileUseCase = SearchProfileUseCase;
