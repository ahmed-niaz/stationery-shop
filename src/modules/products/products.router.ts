import { Router } from 'express';
import { productsController } from './products.controller';

const productsRouter = Router();

productsRouter.post('/create-products', productsController.createProducts);
productsRouter.get('/:productId', productsController.singleProduct);
productsRouter.put('/:productId', productsController.updateProduct);
productsRouter.delete('/:productId', productsController.deleteProduct);
productsRouter.get('/', productsController.getProducts);

export default productsRouter;
