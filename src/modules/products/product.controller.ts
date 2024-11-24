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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.status || error.statusCode || 500).json({
      success: false,
      message: error.message,
      error: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query;

    const result = await productServices.getAllProductFromDB(searchTerm);

    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all products',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.status || error.statusCode || 500).json({
      success: false,
      message: error.message,
      error: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await productServices.singleProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product retrieved successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.status || error.statusCode || 500).json({
      success: false,
      message: error.message,
      error: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await productServices.updateProductFromDB(
      productId,
      updateData,
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.status || error.statusCode || 500).json({
      success: false,
      message: error.message,
      error: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.status || error.statusCode || 500).json({
      success: false,
      message: error.message,
      error: {
        name: error.name,
        errors: error.errors,
      },
      stack: error.stack,
    });
  }
};

export const productControllers = {
  getAllProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
