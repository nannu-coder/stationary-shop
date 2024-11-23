import { IProduct } from './product.interface';
import Product from './product.model';

const getAllProductFromDB = async (searchTerm: Partial<IProduct>) => {
  // const query =
  //   Object.keys(searchTerm).length !== 0
  //     ? {
  //         $or: [
  //           { name: searchTerm.name?.toLocaleLowerCase() },
  //           { brand: searchTerm.brand?.toLocaleLowerCase() },
  //           { category: searchTerm.category?.toLocaleLowerCase() },
  //         ],
  //       }
  //     : {};

  const query =
    Object.keys(searchTerm).length !== 0
      ? {
          $or: Object.entries(searchTerm).map(([key, value]) => {
            return { [key]: value };
          }),
        }
      : {};

  const result = await Product.find(query);
  // const result = await Product.find({ name: 'Gel Pen' });
  console.log(result);
  return result;
};

const createProductIntoDB = async (proData: IProduct) => {
  const createProduct = await Product.create(proData);
  return createProduct;
};

export const productServices = {
  getAllProductFromDB,
  createProductIntoDB,
};
