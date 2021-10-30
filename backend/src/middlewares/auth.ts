import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../config/auth';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded: any = jwt.verify(token, authConfig.secret);

    req.userId = decoded.id;
    req.userType = decoded.userType;

    console.log('decoded', decoded);

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
