import { IProduct } from './product.interface';
import Product from './product.model';

const singleProductFromDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

const getAllProductFromDB = async (searchTerm: Partial<IProduct>) => {
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

  const result = await Product.find(query);
  return result;
};

const createProductIntoDB = async (proData: IProduct) => {
  const createProduct = await Product.create(proData);
  return createProduct;
};

const updateProductFromDB = async (
  productId: string,
  productData: Partial<IProduct>,
) => {
  const updateProduct = await Product.findByIdAndUpdate(
    { _id: productId },
    { $set: productData },
    { new: true, runValidators: true },
  );

  return updateProduct;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};

export const productServices = {
  getAllProductFromDB,
  createProductIntoDB,
  singleProductFromDB,
  updateProductFromDB,
  deleteProductFromDB,
};
