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
      password: Joi.string().required(),
    });

    await schema.validateAsync(payload, {
      abortEarly: false,
      stripUnknown: true,
    });

    const { password, email, ...payloadRest } = payload;
    try {
      const parent = await this.getParentByEmail(email);

      if (parent) {
        throw new AppError('An account already exists with this e-mail', 400);
      }

      const created = await prismaClient.parent.create({
        data: {
          password: hashSync(payload.password, parseInt(process.env.PASSWORD_SALT_ROUNDS)),
          email,
          ...payloadRest,
        },
      });

      delete created.password;

      return created;
    } catch (error: AppError | any) {
      if (error instanceof AppError) {
        throw new AppError(error.message, error.statusCode);
      }
      console.error('');
      throw new AppError('Invalid entry data! Check your payload', 500);
    }
  }

  async getAllParents(): Promise<ParentResponseDTO[]> {
    console.log('ParentService.getAllParents');

    return await prismaClient.parent.findMany({
      select: {
        id: true,
        name: true,
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
