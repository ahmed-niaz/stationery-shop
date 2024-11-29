import { IProducts } from './products.interface';
import Products from './products.model';

const createProducts = async (payload: IProducts): Promise<IProducts> => {
  const result = await Products.create(payload);
  return result;
};

export const productService = {
  createProducts,
};
