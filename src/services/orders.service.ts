import OrderModel from '../database/models/order.model';
import { Order } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';
import getProductIdByOrderId from '../utils/getProductIdByOrderId';

const listAll = async () : Promise<ServiceResponse<Order[]>> => {
  const allOrders = await OrderModel.findAll();

  const formatedOrders = await Promise.all(allOrders.map(async (order) => {
    const { id, userId } = order.dataValues;
    const productId = await getProductIdByOrderId(order.dataValues.id);
    return {
      id,
      userId,
      productIds: productId,
    };
  }));

  return { status: 'SUCCESSFUL', data: formatedOrders };
};

export default {
  listAll,
};