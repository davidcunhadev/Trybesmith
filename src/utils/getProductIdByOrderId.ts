import ProductModel from '../database/models/product.model';

const getProductIdByOrderId = async (orderId: number) : Promise<number[]> => {
  const allProducts = await ProductModel.findAll({ where: { orderId } });
  const allIds = allProducts.map((item) => item.dataValues.id);
  return allIds;
};

export default getProductIdByOrderId;