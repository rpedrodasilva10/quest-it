import { Request, Response } from 'express';
import QuestService from '../services/QuestService';

class GetQuestController {
  async getAllQuests(req: Request, res: Response) {
    const service = new QuestService();

    return res.json(await service.getQuests());
  }
}

export default GetQuestController;
