import Joi from 'joi';
import CreateQuestRequestDTO from '../dtos/CreateQuestRequestDTO';
import AppError from '../errors/AppError';
import prismaClient from '../prisma';
import isValidIdPathParam from '../utils/isValidIdPathParam';
import ChildService from './ChildService';

class QuestService {
  async createQuest(parentId: number, quest: CreateQuestRequestDTO) {
    console.log('QuestService.createQuest');
    const schema = Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      stars: Joi.number().integer().min(1).max(5),
    });

    await schema.validateAsync(quest);

    const createdQuest = await prismaClient.quest.create({
      data: {
        parentId,
        ...quest,
      },
    });

    return createdQuest;
  }

  async getQuests() {
    console.log('QuestService.getQuests');

    return await prismaClient.quest.findMany();
  }

  async startQuest(questId: string, childId: string) {
    console.log('QuestService.startQuest');

    const quest = await this.getQuestById(questId);

    if (quest.startedAt) {
      throw new AppError(`Quest already started at ${quest.startedAt}`);
    }

    const childService = new ChildService();
    const child = await childService.getChildById(childId);

    return await prismaClient.quest.update({
      where: {
        id: quest.id,
      },
      data: {
        startedAt: new Date(),
        childId: child.id,
      },
    });
  }

  async getQuestById(id: string) {
    console.log('QuestService.getQuestById');
    if (isValidIdPathParam(id)) {
      const quest = await prismaClient.quest.findFirst({
        where: {
          id: Number(id),
        },
      });

      if (!quest) {
        throw new AppError(`Quest not found with id '${id}'`);
      }
      return quest;
    }

    throw new AppError(`Value '${id}' is an invalid quest id number`);
  }

  async finishQuest(id: string) {
    console.log('QuestService.finishQuest');

    const quest = await this.getQuestById(id);

    if (quest.finishedAt) {
      throw new AppError(`Quest already finished`);
    }

    if (!quest.startedAt) {
      throw new AppError(`Quest not started yet`);
    }

    return await prismaClient.quest.update({
      where: {
        id: quest.id,
      },
      data: {
        finishedAt: new Date(),
      },
    });
  }
}

export default QuestService;
