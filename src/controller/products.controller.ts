import { Request, Response } from 'express';
import productsService from '../services/products.service';

const create = async (req: Request, res: Response) : Promise<unknown> => {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productsService.create({ name, price, orderId });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }

  return res.status(201).json(serviceResponse.data);
};

export default {
  create,
};