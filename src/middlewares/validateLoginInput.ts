import { NextFunction, Request, Response } from 'express';
import checkRequiredLoginFields from '../utils/checkRequiredLoginFields';

const validateLoginInput = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const requiredLoginFields = ['username', 'password'];

  const loginFieldError = checkRequiredLoginFields(body, requiredLoginFields);
  if (loginFieldError) {
    return res.status(400).json({ message: loginFieldError });
  }

  next();
};

export default validateLoginInput;