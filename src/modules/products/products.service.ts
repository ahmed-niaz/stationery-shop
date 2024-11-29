import { IProducts } from './products.interface';
import Products from './products.model';

const createProducts = async (payload: IProducts): Promise<IProducts> => {
  const result = await Products.create(payload);
  return result;
};

const getProducts = async() => {
    const result = await Products.find()
    return result
}

const singleProduct = async(id:string) =>{
    const result = await Products.findById(id)
    return result
}

export const productService = {
  createProducts,
  getProducts,
  singleProduct
};
