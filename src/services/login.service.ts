import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import { UserLogin } from '../types/User';
import jwt from '../utils/jwt';

const verifyLogin = async (login: UserLogin) : Promise<ServiceResponse<Token>> => {
  const foundUser = await UserModel.findOne({ where: { username: login.username } });

  if (!foundUser || !bcrypt.compareSync(login.password, foundUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = foundUser.dataValues;

  const token = jwt.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  verifyLogin,
};