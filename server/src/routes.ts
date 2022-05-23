import express from 'express';
import { prisma } from './prisma';

export const routes = express.Router();

routes.get('/u', async (req, res) => {
  const allUsers = await prisma.user.findMany();

  return res.send(allUsers);
});

routes.post('/u', async (req, res) => {
  const { username, display_name, password } = req.body;

  const user = await prisma.user.create({
    data: {
      username,
      display_name,
      password,
    },
  });

  return res.status(201).json({ data: user });
});

routes.get('/p', async (req, res) => {
  const allProfiles = await prisma.profile.findMany();

  return res.send(allProfiles);
});

routes.get('/p/:username', async (req, res)=>{
  const findProfile = await prisma.profile.findUnique(
    {
      where: {
        username: req.params.username
      }
    }
  );

  return res.send({data: findProfile})
});

routes.post('/p', async (req, res) => {
  const { username, display_name, welcome_phrase, description, profile_picture } = req.body;

  const profile = await prisma.profile.create({
    data: {
      username,
      display_name,
      welcome_phrase,
      description,
      profile_picture
    }
  });

  return res.status(201).json({ data: profile });
});