import { Request, Response } from 'express';
import { productService } from './products.service';

const createProducts = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await productService.createProducts(payload);
    res.status(200).json({
      status: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

const getProducts = async(req:Request,res:Response) =>{
    try{
        const result = await productService.getProducts()
        res.status(200).json({
            status: true,
            message: 'Products retrieved successfully',
            data: result,
          });
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'something went wrong',
            error,
          });
    }
}

const singleProduct = async(req:Request,res:Response) => {
    try{
const productID = req.params.productID
const result = await productService.singleProduct(productID)
res.status(200).send({
    result:true,
    message: 'Products retrieved successfully',
    data: result,
})
    }catch(error){
        res.status(500).json({
            status: false,
            message: 'something went wrong',
            error,
          });
    }
}
export const productsController = {
  createProducts,
  getProducts,
  singleProduct
};
