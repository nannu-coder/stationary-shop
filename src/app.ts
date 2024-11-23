import express from 'express';
import { productRoute } from './modules/products/product.routes';

export const app = express();

// middleware
app.use(express.json());
// app.use()

// path middleware
app.use('/api', productRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});
