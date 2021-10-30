import { Parent, PrismaClient } from '.prisma/client';
import Joi from 'joi';
import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import ParentResponseDTO from '../dtos/ParentResponseDTO';
import AppError from '../errors/AppError';
import prismaClient from '../prisma';
import isValidIdPathParam from '../utils/isValidIdPathParam';
import ChildService from './ChildService';

class ParentService {
  async getParentById(id: string): Promise<Parent> {
    console.log('ParentService.getParentById');
    if (!isValidIdPathParam(id)) {
      throw new AppError(`Parameter 'id' must be a valid number`);
    }
    const treatedId = parseInt(id);
    const prismaClient = new PrismaClient();

    const foundParent = await prismaClient.parent.findFirst({
      where: {
        id: treatedId,
      },
      include: {
        children: true,
      },
    });

    if (!foundParent) {
      throw new AppError(`Parent not found with id '${id}'`);
    }

    return foundParent;
  }

  async createParent(payload: CreateParentRequestDTO) {
    console.log('ParentService.createParent');
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      lastName: Joi.string().required(),
      nickname: Joi.string(),
    });

    await schema.validateAsync(payload, {
      abortEarly: false,
      stripUnknown: true,
    });

    console.log(`PaymentService.createParent \nData: ${JSON.stringify(payload)}`);
    try {
      const created = await prismaClient.parent.create({
        data: {
          ...payload,
        },
      });

      return created;
    } catch (error) {
      throw new AppError('Invalid entry data! Check your payload', 400);
    }
  }

  async getAllParents(): Promise<ParentResponseDTO[]> {
    console.log('ParentService.getAllParents');
    const prismaClient = new PrismaClient();

    return await prismaClient.parent.findMany();
  }

  async getChildrenByParentId(parentId: string) {
    console.log('ParentService.getChildrenByParentId');
    await this.getParentById(parentId);
    const childService = new ChildService();
    const children = await childService.getChildrenByParentId(parentId);

    return children;
  }
}

export default ParentService;
