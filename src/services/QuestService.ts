import { PrismaClient } from '.prisma/client';
import CreateQuestRequestDTO from '../dtos/CreateQuestRequestDTO';

class QuestService {
  async createQuest(parentId: number, quest: CreateQuestRequestDTO) {
    const prismaClient = new PrismaClient();

    const createdQuest = await prismaClient.quest.create({
      data: {
        parentId,
        ...quest,
      },
    });

    return createdQuest;
  }
}

export default QuestService;
