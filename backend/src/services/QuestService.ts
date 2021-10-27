import { PrismaClient } from '.prisma/client';
import Joi from 'joi';
import CreateQuestRequestDTO from '../dtos/CreateQuestRequestDTO';

class QuestService {
  async createQuest(parentId: number, quest: CreateQuestRequestDTO) {
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      stars: Joi.number().integer().min(1).max(5),
    });

    await schema.validateAsync(quest);

    const prismaClient = new PrismaClient();

    const createdQuest = await prismaClient.quest.create({
      data: {
        parentId,
        ...quest,
      },
    });

    return createdQuest;
  }

  async getQuests() {
    const prismaClient = new PrismaClient();

    return await prismaClient.quest.findMany();
  }
}

export default QuestService;
