import express from 'express';
import { orderController } from './order.controllers';

const router = express.Router();

router.get('/orders', orderController.totalOrder);
router.post('/orders', orderController.createOrder);
router.get('/orders/revenue', orderController.totalRevenue);

export const orderRoutes = router;
