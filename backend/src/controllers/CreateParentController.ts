import { Request, Response } from 'express';
import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import ParentService from '../services/ParentService';

class CreateParentController {
  async createParent(req: Request, res: Response) {
    const parentService = new ParentService();
    const receivedPayload: CreateParentRequestDTO = req.body;

    const createdParent = await parentService.createParent({ ...receivedPayload });

    return res.status(201).json(createdParent);
  }
}

export default CreateParentController;
