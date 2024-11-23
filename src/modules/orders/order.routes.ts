import express from 'express';
import { orderController } from './order.controllers';

const router = express.Router();

router.get('/order', orderController.getSingleOrder);
router.post('/orders', orderController.createOrder);

export const orderRoutes = router;
