import { Request, Response } from 'express';
import ChildService from '../services/ChildService';

class GetChildrenController {
  async getChildrenByParentId(req: Request, res: Response) {
    const service = new ChildService();
    return res.status(200).json(await service.getChildrenByParentId(req.params.id));
  }
}

export default GetChildrenController;
