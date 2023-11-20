import { Request, Response } from 'express';
import ordersService from '../services/orders.service';

const listAll = async (_req: Request, res: Response) : Promise<Response> => {
  const serviceResponse = await ordersService.listAll();

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }

  return res.status(200).json(serviceResponse.data);
};

export default {
  listAll,
};