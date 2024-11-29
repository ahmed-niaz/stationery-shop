import { Request, Response } from 'express';
import { orderService } from './orders.service';

const placeOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await orderService.createOrder(payload);
    res.status(200).json({
      status: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getRevenue();
    res.status(200).json({
      status: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      error,
    });
  }
};

export const orderController = {
  placeOrder,
  getRevenue,
};
