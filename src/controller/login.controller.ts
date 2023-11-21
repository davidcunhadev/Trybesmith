import { Request, Response } from 'express';
import loginService from '../services/login.service';

const verifyLogin = async (req: Request, res: Response) : Promise<Response> => {
  const { username, password } = req.body;
  const serviceResponse = await loginService.verifyLogin({ username, password });

  if (serviceResponse.status !== 'SUCCESSFUL') {
    return res.status(401).json(serviceResponse.data);
  }

  return res.status(200).json(serviceResponse.data);
};

export default {
  verifyLogin,
};