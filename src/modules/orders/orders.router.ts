import { Router } from 'express';
import { orderController } from './orders.controller';

const ordersRouter = Router();

ordersRouter.post('/create-order', orderController.placeOrder);
ordersRouter.get('/revenue', orderController.getRevenue);

export default ordersRouter;
