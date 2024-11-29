import { Router } from 'express';
import { productsController } from './products.controller';

const productsRouter = Router();

productsRouter.post('/create-products', productsController.createProducts);
productsRouter.get('/:productID', productsController.singleProduct);
productsRouter.get('/', productsController.getProducts);

export default productsRouter;
