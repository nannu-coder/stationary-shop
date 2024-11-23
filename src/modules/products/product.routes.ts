import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

router.get('/products/:productId', productControllers.getSingleProduct);
router.put('/products/:productId', productControllers.updateProduct);
router.delete('/products/:productId', productControllers.deleteProduct);
router.get('/products', productControllers.getAllProducts);
router.post('/products', productControllers.createProduct);

export const productRoute = router;
