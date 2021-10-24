import { Request, Response } from 'express';
import AppError from '../errors/AppError';
import ParentService from '../services/ParentService';

class GetParentController {
  async getParentById(req: Request, res: Response) {
    const parentId = Number.parseInt(req.params.id);
    if (isNaN(parentId)) {
      throw new AppError(`Parameter 'id' must be a valid number`);
    }

    const service = new ParentService();
    return res.status(200).json(await service.getParentById(parentId));
  }
  async getAllParents(req: Request, res: Response) {
    const parentService = new ParentService();

    const parentsList = await parentService.getAllParents();
    return res.status(200).json(parentsList);
  }
}

export default GetParentController;
