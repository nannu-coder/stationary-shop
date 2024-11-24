"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServices = void 0;
const product_model_1 = __importDefault(require("../products/product.model"));
const order_model_1 = require("./order.model");
const http_errors_1 = __importDefault(require("http-errors"));
const createiOrderIntoDB = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const existingProduct = yield product_model_1.default.findById(orderData.product);
    if (!existingProduct) {
        throw (0, http_errors_1.default)(404, 'Product not found');
    }
    if (orderData.quantity > existingProduct.quantity) {
        throw (0, http_errors_1.default)(400, 'Insufficient quantity');
    }
    const totalPrice = orderData.quantity * existingProduct.price;
    const updateProduct = yield product_model_1.default.findOneAndUpdate({ _id: orderData.product, quantity: { $gte: orderData.quantity } }, {
        $inc: { quantity: -orderData.quantity },
        inStock: existingProduct.quantity - orderData.quantity > 0,
    }, { new: true });
    if (!updateProduct) {
        throw (0, http_errors_1.default)(400, 'Failed to update product quantity');
    }
    orderData.totalPrice = Number(totalPrice.toFixed(2));
    const result = yield order_model_1.Order.create(orderData);
    return result;
});
const totalOrderInDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find({});
    return result;
});
const totalRevenueFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.aggregate([
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
    return result[0];
});
exports.orderServices = {
    totalOrderInDB,
    createiOrderIntoDB,
    totalRevenueFromDB,
};
