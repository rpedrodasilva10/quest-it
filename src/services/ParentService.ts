import { Parent, PrismaClient } from '.prisma/client';
import Joi from 'joi';
import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import ParentResponseDTO from '../dtos/ParentResponseDTO';
import AppError from '../errors/AppError';
import prismaClient from '../prisma';

class ParentService {
  async getParentById(id: number): Promise<Parent> {
    const prismaClient = new PrismaClient();

    const foundParent = await prismaClient.parent.findFirst({
      where: {
        id,
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
      surname: Joi.string().required(),
      nickname: Joi.string(),
    });

    await schema.validateAsync(payload, {
      abortEarly: false,
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

  async findById() {}
}

export default ParentService;
