import { Router } from 'express';
import { productsController } from './products.controller';

const productsRouter = Router();

productsRouter.post('/create-products', productsController.createProducts);

export default productsRouter;
