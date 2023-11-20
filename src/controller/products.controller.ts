import { Request, Response } from 'express';
import productsService from '../services/products.service';

const listAll = async (_req: Request, res: Response) : Promise<Response> => {
  const serviceResponse = await productsService.listAll();

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);  
  }

  return res.status(200).json(serviceResponse.data);
};

const create = async (req: Request, res: Response) : Promise<Response> => {
  const { name, price, orderId } = req.body;
  const serviceResponse = await productsService.create({ name, price, orderId });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(400).json(serviceResponse.data);
  }

  return res.status(201).json(serviceResponse.data);
};

export default {
  listAll,
  create,
};