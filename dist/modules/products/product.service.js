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
exports.productServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const singleProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(productId);
    return result;
});
const getAllProductFromDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    //? Dynamically database query for retrieving shop products
    const query = 
    //* Check if the searchTerm object is Empty or not
    Object.keys(searchTerm).length !== 0
        ? //* I use object entries so that i can reduce repetative code for different keys and values
            {
                $or: Object.entries(searchTerm).map(([key, value]) => {
                    return { [key]: value };
                }),
            }
        : {};
    const result = yield product_model_1.default.find(query);
    return result;
});
const createProductIntoDB = (proData) => __awaiter(void 0, void 0, void 0, function* () {
    const createProduct = yield product_model_1.default.create(proData);
    return createProduct;
});
const updateProductFromDB = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const updateProduct = yield product_model_1.default.findByIdAndUpdate({ _id: productId }, { $set: productData }, { new: true, runValidators: true });
    return updateProduct;
});
const deleteProductFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.deleteOne({ _id: productId });
    return result;
});
exports.productServices = {
    getAllProductFromDB,
    createProductIntoDB,
    singleProductFromDB,
    updateProductFromDB,
    deleteProductFromDB,
};
