import { Router } from 'express';
import loginController from '../controller/login.controller';
import validateLoginInput from '../middlewares/validateLoginInput';

const loginRouter = Router();

loginRouter.post('/login', validateLoginInput, loginController.verifyLogin);

export default loginRouter;