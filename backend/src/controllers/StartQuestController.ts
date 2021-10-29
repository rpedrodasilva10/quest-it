import { Request, Response } from 'express';
import QuestService from '../services/QuestService';

class StartQuestController {
  async startQuest(req: Request, res: Response) {
    const { questId, childId } = req.params;

    const questService = new QuestService();

    const startedQuest = await questService.startQuest(questId, childId);
    return res.status(201).json(startedQuest);
  }
}

export default StartQuestController;
