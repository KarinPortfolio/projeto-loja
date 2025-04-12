import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

export const userRouter = Router();

const router = Router();

userRouter.use('/user', router);
userRouter.get('/', async function (req, res) {
  const prisma = new Prisma(Client);
  const users = await prisma.user.findMany();
  res.send(users);
});

userRouter.get('/:nome', function (req, res) {
  res.send('Usuario logado!');
});
