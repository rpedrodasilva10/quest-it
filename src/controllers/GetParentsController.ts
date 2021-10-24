import { Request, Response } from 'express';
import ParentService from '../services/ParentService';

class GetParentController {
  async getParentById(req: Request, res: Response) {
    const service = new ParentService();
    return res.status(200).json(await service.getParentById(req.params.id));
  }
  async getAllParents(req: Request, res: Response) {
    const parentService = new ParentService();

    const parentsList = await parentService.getAllParents();
    return res.status(200).json(parentsList);
  }
}

export default GetParentController;
