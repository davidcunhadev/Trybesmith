import ProductModel, {
  ProductInputtableTypes,
  ProductSequelizeModel,
} from '../database/models/product.model';
import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';
import validateInputNewProduct from '../utils/validateInputNewProduct';

const listAll = async (): Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: products };
};

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
  listAll,
  create,
};