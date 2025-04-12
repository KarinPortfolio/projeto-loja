import express from 'express';
import { userRouter } from './modules/user/user.controller.js';
import { productRouter } from './modules/product/product.controller.js';
const app = express();

app.use('/users', userRouter); // Monta as rotas de userRouter sob o prefixo /users
app.use('/products', productRouter); // Monta as rotas de productRouter sob o prefixo /products

app.listen(8000, function () {
  console.log('Server is running on port 8000');
});
