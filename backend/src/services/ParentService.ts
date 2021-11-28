import { hashSync } from 'bcrypt';
import Joi from 'joi';
import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import ParentResponseDTO from '../dtos/ParentResponseDTO';
import AppError from '../errors/AppError';
import prismaClient from '../prisma';
import isValidIdPathParam from '../utils/isValidIdPathParam';
import ChildService from './ChildService';
class ParentService {
  async getParentById(id: string): Promise<ParentResponseDTO> {
    console.log('ParentService.getParentById');
    if (!isValidIdPathParam(id)) {
      throw new AppError(`Parameter 'id' must be a valid number`);
    }
    const treatedId = parseInt(id);

    const foundParent = await prismaClient.parent.findFirst({
      select: {
        id: true,
        name: true,
        lastName: true,
        nickname: true,
        birthDate: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
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
    console.log('ParentService.createParent');
    const schema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      lastName: Joi.string().required(),
      nickname: Joi.string(),
      password: Joi.string().required(),
    });

    await schema.validateAsync(payload, {
      abortEarly: false,
      stripUnknown: true,
    });

    const { password, ...payloadWithoutPassword } = payload;
    try {
      const created = await prismaClient.parent.create({
        data: {
          password: hashSync(payload.password, parseInt(process.env.PASSWORD_SALT_ROUNDS)),
          ...payloadWithoutPassword,
        },
      });

      delete created.password;

      return created;
    } catch (error) {
      throw new AppError('Invalid entry data! Check your payload', 400);
    }
  }

  async getAllParents(): Promise<ParentResponseDTO[]> {
    console.log('ParentService.getAllParents');

    return await prismaClient.parent.findMany({
      select: {
        id: true,
        name: true,
        lastName: true,
        nickname: true,
        birthDate: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async getChildrenByParentId(parentId: string) {
    console.log('ParentService.getChildrenByParentId');
    await this.getParentById(parentId);
    const childService = new ChildService();
    const children = await childService.getChildrenByParentId(parentId);

    return children;
  }

  async getParentByEmail(email: string) {
    console.log('ParentService.getParentByEmail');

    const parent = await prismaClient.parent.findFirst({
      where: {
        email,
      },
    });

    return parent;
  }
}

export default ParentService;
