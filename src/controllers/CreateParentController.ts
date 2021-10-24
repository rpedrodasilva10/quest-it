import { Request, Response } from 'express';
import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import ParentService from '../services/ParentService';

class CreateParentController {
  async createParent(req: Request, res: Response) {
    const parentService = new ParentService();
    const { name, nickname, surname }: CreateParentRequestDTO = req.body;

    const createdParent = await parentService.createParent({
      name,
      nickname,
      surname,
    });

    return res.status(201).json(createdParent);
  }
}

export default CreateParentController;
