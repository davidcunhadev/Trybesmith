import { ProductInputtableTypes } from '../database/models/product.model';

function validateInputNewProduct({ name, price, orderId }: ProductInputtableTypes): string | null {
  if (!name) return 'Name is required';
  if (!price) return 'Price is required';
  if (!orderId) return 'OrderID is required';
  
  return null;
}

export default validateInputNewProduct;