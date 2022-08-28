"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProfile = void 0;
const prisma_1 = require("../../../prisma");
class GetProfile {
    async handle(req, res) {
        const profile = await prisma_1.prisma.profile.findUnique({
            where: {
                username: req.query.username
            }
        });
        if (!profile) {
            return res.status(404).send({ error: "Profile not found!" });
        }
        return res.send(profile);
    }
}
exports.GetProfile = GetProfile;
