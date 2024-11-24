"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        required: [true, 'Please provide a valid product name.'],
        type: String,
        trim: true,
    },
    brand: {
        type: String,
        required: [true, 'Please specify the product brand.'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a valid price.'],
    },
    category: {
        type: String,
        required: [true, 'Please select a valid category.'],
        enum: {
            values: [
                'Writing',
                'Office Supplies',
                'Art Supplies',
                'Educational',
                'Technology',
            ],
            message: '`{VALUE}` is not a valid category. Accepted categories are: Writing, Office Supplies, Art Supplies, Educational, and Technology.',
        },
    },
    description: {
        type: String,
        required: [
            true,
            'Please provide detailed information about the product.',
        ],
    },
    quantity: {
        type: Number,
        required: [true, 'Please specify the available stock.'],
    },
    inStock: {
        type: Boolean,
        required: [true, 'Please indicate whether the product is available.'],
    },
}, {
    timestamps: true,
});
const Product = (0, mongoose_1.model)('product', productSchema);
exports.default = Product;
