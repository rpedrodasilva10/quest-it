import { Request, Response } from 'express';
import CreateQuestRequestDTO from '../dtos/CreateQuestRequestDTO';
import ParentService from '../services/ParentService';
import QuestService from '../services/QuestService';

class CreateQuestController {
  async createQuest(req: Request, res: Response) {
    const parentId = req.params.id;
    const parentService = new ParentService();
    const parent = await parentService.getParentById(parentId);

    const questService = new QuestService();

    return res.status(201).json(await questService.createQuest(parent.id, req.body as CreateQuestRequestDTO));
  }
}

export default CreateQuestController;
