import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import validateInputNewProduct from '../utils/validateInputNewProduct';

const create = async (product: ProductInputtableTypes) : Promise<ServiceResponse<Product>> => {
  let responseService: ServiceResponse<Product>;
  const error = validateInputNewProduct(product);

  if (error) {
    responseService = { status: 'INVALID_DATA', data: { message: error } };
    return responseService;
  }

  const newProduct = await ProductModel.create(product);

  responseService = { status: 'SUCCESSFUL', data: newProduct.dataValues };
  return responseService;
};

export default {
  create,
};