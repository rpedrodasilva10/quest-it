import { Request, Response } from 'express';
import CreateQuestRequestDTO from '../dtos/CreateQuestRequestDTO';
import ParentService from '../services/ParentService';
import QuestService from '../services/QuestService';

class QuestController {
  async getAllQuests(req: Request, res: Response) {
    const service = new QuestService();

    return res.json(await service.getQuests());
  }

  async getAllQuestsByParent(req: Request, res: Response) {
    const parentId = req.params.id;
    const parentService = new ParentService();
    const parent = await parentService.getParentById(parentId);

    const service = new QuestService();

    return res.json(await service.getQuestsByParent(parent.id));
  }

  async createQuest(req: Request, res: Response) {
    const parentId = req.params.id;
    const parentService = new ParentService();
    const parent = await parentService.getParentById(parentId);

    const questService = new QuestService();

    return res.status(201).json(await questService.createQuest(parent.id, req.body as CreateQuestRequestDTO));
  }

  async startQuest(req: Request, res: Response) {
    const { id } = req.params;

    const { childId } = req.body;

    const questService = new QuestService();

    const startedQuest = await questService.startQuest(id, childId);
    return res.status(201).json(startedQuest);
  }

  async finishQuest(req: Request, res: Response) {
    const { id } = req.params;

    const questService = new QuestService();

    const startedQuest = await questService.finishQuest(id);
    return res.status(201).json(startedQuest);
  }
}

export default new QuestController();
