"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controllers_1 = require("./order.controllers");
const router = express_1.default.Router();
router.get('/orders', order_controllers_1.orderController.totalOrder);
router.post('/orders', order_controllers_1.orderController.createOrder);
router.get('/orders/revenue', order_controllers_1.orderController.totalRevenue);
exports.orderRoutes = router;
