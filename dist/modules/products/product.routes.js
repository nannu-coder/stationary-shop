"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.get('/products/:productId', product_controller_1.productControllers.getSingleProduct);
router.put('/products/:productId', product_controller_1.productControllers.updateProduct);
router.delete('/products/:productId', product_controller_1.productControllers.deleteProduct);
router.get('/products', product_controller_1.productControllers.getAllProducts);
router.post('/products', product_controller_1.productControllers.createProduct);
exports.productRoute = router;
