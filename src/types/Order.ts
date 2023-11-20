import { Product } from './Product';

export type Order = {
  id: number;
  userId: number;
  productId?: number;
};

export type OrderWithArrayOfAllProducts = {
  id: number;
  userId: number;
  productIds?: Product[];
};

export type OrderWithArrayOfProductsIds = {
  id: number;
  userId: number;
  productIds?: number[];
};
