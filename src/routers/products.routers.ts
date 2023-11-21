import { Router } from 'express';
import productsController from '../controller/products.controller';
import validateNewProductInput from '../middlewares/validateNewProductInput';

const productsRouter = Router();
productsRouter.get('/products', productsController.listAll);
productsRouter.post(
  '/products',
  validateNewProductInput.validateNameInput,
  validateNewProductInput.validatePriceInput,
  productsController.create,
);

export default productsRouter;
