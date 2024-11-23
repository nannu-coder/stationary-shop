import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await productServices.createProductIntoDB(data);

    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error: error,
      // stack
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query;

    // console.log(filter);

    const result = await productServices.getAllProductFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all products',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error: error,
      // stack
    });
  }
};

export const productControllers = {
  getAllProducts,
  createProduct,
};
