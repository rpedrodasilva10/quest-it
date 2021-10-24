import { Parent, PrismaClient } from '.prisma/client';
import Joi from 'joi';
import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import ParentResponseDTO from '../dtos/ParentResponseDTO';
import AppError from '../errors/AppError';
import prismaClient from '../prisma';
import isValidIdPathParam from '../utils/isValidIdPathParam';

class ParentService {
  async getParentById(id: string): Promise<Parent> {
    if (!isValidIdPathParam(id)) {
      throw new AppError(`Parameter 'id' must be a valid number`);
    }
    const treatedId = parseInt(id);
    const prismaClient = new PrismaClient();

    const foundParent = await prismaClient.parent.findFirst({
      where: {
        id: treatedId,
      },
    });

    if (!foundParent) {
      throw new AppError(`Parent not found with id '${id}'`);
    }

    return foundParent;
  }

  async createParent(payload: CreateParentRequestDTO) {
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
    const prismaClient = new PrismaClient();

    return await prismaClient.parent.findMany();
  }
}

export default ParentService;
