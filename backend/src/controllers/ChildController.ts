import { Request, Response } from 'express';
import { CreateChildRequestDTO } from '../dtos/CreateChilldRequestDTO';
import ChildService from '../services/ChildService';

class ChildController {
  async createChild(req: Request, res: Response) {
    const service = new ChildService();
    const parentId = req.params.id;

    const childrenPayload: CreateChildRequestDTO = {
      parentId: parentId,
      children: req.body,
    };
    return res.status(201).json(await service.createChild(childrenPayload));
  }

  async getChildrenByParentId(req: Request, res: Response) {
    const service = new ChildService();
    return res.status(200).json(await service.getChildrenByParentId(req.params.id));
  }
}

export default new ChildController();
