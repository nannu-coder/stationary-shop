import mongoose from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new mongoose.Schema<IOrder>({
  email: {
    type: String,
    required: [true, 'Email field is required'],
    trim: true,
  },
  product: {
    required: [true, 'Product field is required'],
    type: mongoose.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity field is required'],
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price field is required'],
  },
});

export const Order = mongoose.model<IOrder>('order', orderSchema);
