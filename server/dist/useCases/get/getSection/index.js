"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSection = exports.GetAllSections = void 0;
const prisma_1 = require("../../../prisma");
class GetAllSections {
    async handle(req, res) {
        const sections = await prisma_1.prisma.sections.findMany({
            where: {
                username: req.query.username
            }
        });
        if (!sections) {
            return res.status(200).send({ message: "No section yet!" });
        }
        return res.send(sections);
    }
}
exports.GetAllSections = GetAllSections;
class GetSection {
    async handle(req, res) {
        const section = await prisma_1.prisma.sections.findUnique({
            where: {
                id: req.query.id
            }
        });
        if (!section) {
            return res.status(404).send({ error: "Section not found!" });
        }
        return res.send(section);
    }
}
exports.GetSection = GetSection;
