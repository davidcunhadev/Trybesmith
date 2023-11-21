import { Router } from 'express';
import productsController from '../controller/products.controller';

const productsRouter = Router();
productsRouter.get('/products', productsController.listAll);
productsRouter.post('/products', productsController.create);

export default productsRouter;
