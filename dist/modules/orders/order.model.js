"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, 'Email field is required'],
        trim: true,
    },
    product: {
        required: [true, 'Product field is required'],
        type: mongoose_1.default.Types.ObjectId,
        ref: 'product',
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity field is required'],
    },
    totalPrice: {
        type: Number,
    },
});
exports.Order = mongoose_1.default.model('order', orderSchema);
