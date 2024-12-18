import { IProducts } from './products.interface';
import Products from './products.model';

const createProducts = async (payload: IProducts): Promise<IProducts> => {
  const result = await Products.create(payload);
  return result;
};

const getProducts = async () => {
  const result = await Products.find();
  return result;
};

const singleProduct = async (id: string) => {
  const result = await Products.findById(id);
  return result;
};

const updateProduct = async (id: string, payload: IProducts) => {
  payload.updatedAt = new Date();
  const result = await Products.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true },
  );
  return result;
};

const deleteProduct = async (id: string) => {
  const result = await Products.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProducts,
  getProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};
