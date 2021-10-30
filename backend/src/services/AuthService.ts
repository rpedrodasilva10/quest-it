import Joi from 'joi';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';
import AppError from '../errors/AppError';
import ChildService from './ChildService';
import ParentService from './ParentService';

interface TokenResponse {
  user: {
    id: number;
    name: string;
    email: string;
    nickname?: string;
    type: 'PARENT' | 'CHILD';
  };
  token: string;
}

interface AuthDTO {
  email: string;
  password: string;
}

class AuthService {
  async authenticate(payload: AuthDTO) {
    const { email, password } = payload;

    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    await schema.validateAsync(payload, {
      abortEarly: false,
    });

    const parentService = new ParentService();
    const parent = await parentService.getParentByEmailAndPassword(email, password);

    const childService = new ChildService();
    const child = await childService.getChildByEmailAndPassword(email, password);

    if (!parent && !child) {
      throw new AppError('Invalid credentials! Check your email and password', 401);
    }
    let user;
    let userType: 'PARENT' | 'CHILD';

    if (parent) {
      user = parent;
      userType = 'PARENT';
    }

    if (child) {
      user = child;
      userType = 'CHILD';
    }

    const { id, name, nickname } = user;

    const token = jwt.sign({ id, userType }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    const response: TokenResponse = {
      user: {
        id,
        name,
        email,
        nickname,
        type: parent ? 'PARENT' : 'CHILD',
      },

      token,
    };

    return response;
  }
}

export default AuthService;
