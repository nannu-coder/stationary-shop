import Product from '../products/product.model';
import { IOrder } from './order.interface';
import { Order } from './order.model';

const createiOrderIntoDB = async (orderData: IOrder) => {
  const existingProduct = await Product.findById(orderData.product);

  if (!existingProduct) {
    throw new Error('Product not found');
  }

  if (orderData.quantity > existingProduct.quantity) {
    throw new Error('Insufficient quantity');
  }

  const updateProduct = await Product.findOneAndUpdate(
    { _id: orderData.product, quantity: { $gte: orderData.quantity } },
    {
      $inc: { quantity: -orderData.quantity },
      inStock: existingProduct.quantity - orderData.quantity > 0,
    },
    { new: true },
  );

  if (!updateProduct) {
    throw new Error('Failed to update product quantity');
  }

  const result = await Order.create(orderData);
  return result;
};

const getSingleProductFromDB = async () => {
  const result = await Order.find({});
  return result;
};

export const orderServices = {
  getSingleProductFromDB,
  createiOrderIntoDB,
};
