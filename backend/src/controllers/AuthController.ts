import { Request, Response } from 'express';
import AuthService from '../services/AuthService';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const authService = new AuthService();

    return res.json(await authService.authenticate(req.body));
  }

  private authenticateParent() {}

  private authenticateChild() {}
}

export default new AuthController();
