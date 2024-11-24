"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const product_routes_1 = require("./modules/products/product.routes");
const order_routes_1 = require("./modules/orders/order.routes");
exports.app = (0, express_1.default)();
// middleware
exports.app.use(express_1.default.json());
// path middleware
exports.app.use('/api', product_routes_1.productRoute);
exports.app.use('/api', order_routes_1.orderRoutes);
exports.app.get('/', (req, res) => {
    res.send('Hello World!');
});
