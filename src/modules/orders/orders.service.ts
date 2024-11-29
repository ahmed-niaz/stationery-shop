import Products from '../products/products.model';
import { IOrders } from './orders.interface';
import Orders from './orders.model';

const createOrder = async (payload: IOrders) => {
  try {
    // Find the product
    const product = await Products.findById(payload.product);

    if (!product) {
      throw new Error('Product not found');
    }

    if (product.quantity < payload.quantity) {
      throw new Error('Insufficient stock');
    }

    product.quantity -= payload.quantity;
    if (product.quantity === 0) {
      product.inStock = false;
    }

    await product.save();

    const result = await Orders.create(payload);

    return result;
  } catch (error) {
    console.error(error);
  }
};

const getRevenue = async () => {
  const result = await Orders.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  let totalRevenue = 0;

  if (result.length > 0) {
    totalRevenue = result[0].totalRevenue;
  }

  return { totalRevenue };
};

export const orderService = {
  createOrder,
  getRevenue,
};
