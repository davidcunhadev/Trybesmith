import { UserLogin } from '../types/User';

const checkRequiredLoginFields = (
  receivedFields: UserLogin,
  requiredFields: string[],
) : string | undefined => {
  for (let i = 0; i < requiredFields.length; i += 1) {
    const currentField = requiredFields[i];
    if (!(currentField in receivedFields)) {
      return '"username" and "password" are required';
    }
  }
};

export default checkRequiredLoginFields;