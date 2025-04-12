import { Router } from 'express';
export const productRouter = Router();

productRouter.get('/', function (req, res) {
  res.send('Product route is working!');
});
