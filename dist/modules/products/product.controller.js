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
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const result = yield product_service_1.productServices.createProductIntoDB(data);
        res.status(200).json({
            success: true,
            message: 'Product created successfully',
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
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query;
        const result = yield product_service_1.productServices.getAllProductFromDB(searchTerm);
        res.status(200).json({
            success: true,
            message: 'Successfully retrieved all products',
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
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.singleProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product retrieved successfully',
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
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateData = req.body;
        const result = yield product_service_1.productServices.updateProductFromDB(productId, updateData);
        res.status(200).json({
            success: true,
            message: 'Product updated successfully',
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
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.deleteProductFromDB(productId);
        res.status(200).json({
            success: true,
            message: 'Product deleted successfully',
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
exports.productControllers = {
    getAllProducts,
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
