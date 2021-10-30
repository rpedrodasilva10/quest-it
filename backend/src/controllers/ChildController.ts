import { Request, Response } from 'express';
import { CreateChildRequestDTO } from '../dtos/CreateChilldRequestDTO';
import ChildService from '../services/ChildService';

class ChildController {
  async createChild(req: Request, res: Response) {
    console.log('Creating child');
    const service = new ChildService();

    const childrenPayload: CreateChildRequestDTO = {
      ...req.body,
    };

    return res.status(201).json(await service.createChild(childrenPayload));
  }
}

export default new ChildController();
