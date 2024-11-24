import express from 'express';
import { productRoute } from './modules/products/product.routes';
import { orderRoutes } from './modules/orders/order.routes';

export const app = express();

// middleware
app.use(express.json());

// path middleware
app.use('/api', productRoute);
app.use('/api', orderRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
