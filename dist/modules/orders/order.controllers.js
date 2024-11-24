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
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderController = void 0;
const order_services_1 = require("./order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_services_1.orderServices.createiOrderIntoDB(orderData);
        res.status(200).json({
            success: true,
            message: 'Order created successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(error.status || error.statusCode || 500).json({
            status: false,
            message: error.message,
            error: {
                name: error.name,
                errors: error.errors,
            },
            stack: error.stack,
        });
    }
});
const totalOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.orderServices.totalOrderInDB();
        res.status(200).json({
            status: true,
            message: 'totalOrder Successfully Reteived',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(error.status || error.statusCode || 500).json({
            success: false,
            message: error.message,
            error: {
                name: error.name,
                errors: error.errors,
            },
            stack: error.stack,
        });
    }
});
const totalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_services_1.orderServices.totalRevenueFromDB();
        res.status(200).json({
            status: true,
            message: 'Revenue calculated successfully',
            data: result,
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        res.status(error.status || error.statusCode || 500).json({
            success: false,
            message: error.message,
            error: error,
            // stack
        });
    }
});
exports.orderController = {
    createOrder,
    totalOrder,
    totalRevenue,
};
