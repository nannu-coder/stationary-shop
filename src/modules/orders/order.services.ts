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

  const totalPrice = orderData.quantity * existingProduct.price;

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

  orderData.totalPrice = totalPrice;

  const result = await Order.create(orderData);
  return result;
};

const totalOrderInDB = async () => {
  const result = await Order.find({});
  return result;
};

const totalRevenueFromDB = async () => {
  const result = await Order.aggregate([
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

  console.log('', result[0]);

  return result[0];
};

export const orderServices = {
  totalOrderInDB,
  createiOrderIntoDB,
  totalRevenueFromDB,
};
