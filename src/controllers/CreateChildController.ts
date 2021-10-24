import { Request, Response } from 'express';
import { CreateChildRequestDTO } from '../dtos/CreateChilldRequestDTO';
import ChildService from '../services/ChildService';

class CreateChildController {
  async createChild(req: Request, res: Response) {
    const service = new ChildService();
    const parentId = req.params.id;

    const childrenPayload: CreateChildRequestDTO = {
      parentId: parentId,
      children: req.body,
    };
    return res.status(201).json(await service.createChild(childrenPayload));
  }
}

export default CreateChildController;
