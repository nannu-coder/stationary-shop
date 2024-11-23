import { Request, Response } from 'express';
import { orderServices } from './order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await orderServices.createiOrderIntoDB(orderData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error: error,
      // stack
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getSingleProductFromDB();

    res.status(200).json({
      success: true,
      message: 'order was successfully',
      data: result,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      error: error,
      // stack
    });
  }
};

export const orderController = {
  createOrder,
  getSingleOrder,
};
