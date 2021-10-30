import { Request, Response } from 'express';
import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import ParentService from '../services/ParentService';

class ParentController {
  async getParentById(req: Request, res: Response) {
    const service = new ParentService();
    return res.status(200).json(await service.getParentById(req.params.id));
  }

  async getAllParents(req: Request, res: Response) {
    const parentService = new ParentService();

    const parentsList = await parentService.getAllParents();
    return res.status(200).json(parentsList);
  }

  async createParent(req: Request, res: Response) {
    const parentService = new ParentService();
    const receivedPayload: CreateParentRequestDTO = req.body;

    const createdParent = await parentService.createParent({ ...receivedPayload });

    return res.status(201).json(createdParent);
  }
}

export default new ParentController();
