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

const getProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getProducts();
    res.status(200).json({
      status: true,
      message: 'Products retrieved successfully',
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

const singleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.singleProduct(productId);
    res.status(200).send({
      result: true,
      message: 'Products retrieved successfully',
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const payload = req.body;
    const result = await productService.updateProduct(productId, payload);
    res.status(200).send({
      result: true,
      message: 'Product updated successfully',
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.deleteProduct(productId);
    res.status(200).send({
      result: true,
      message: 'Product deleted successfully',
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

export const productsController = {
  createProducts,
  getProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};
