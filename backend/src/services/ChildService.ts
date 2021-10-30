import { PrismaClient } from '.prisma/client';
import Joi from 'joi';
import { CreateChildRequestDTO } from '../dtos/CreateChilldRequestDTO';
import AppError from '../errors/AppError';
import isValidIdPathParam from '../utils/isValidIdPathParam';
import ParentService from './ParentService';

class ChildService {
  async createChild(payload: CreateChildRequestDTO) {
    console.log('ChildService.createChild');
    const schema = Joi.object({
      parentId: Joi.number().required(),
      children: Joi.array().items({
        name: Joi.string().required(),
        age: Joi.number().required(),
        lastName: Joi.string().required(),
        nickname: Joi.string().optional(),
        email: Joi.string().email().required(),
      }),
    });

    await schema.validateAsync(payload, {
      abortEarly: false,
      stripUnknown: true,
    });

    console.log('Treated payload: ', JSON.stringify(payload));

    const parentService = new ParentService();

    const parent = await parentService.getParentById(payload.parentId);

    const prismaClient = new PrismaClient();

    const createdChildrenList = Promise.all(
      payload.children.map(async (child) => {
        return await prismaClient.child.create({
          data: {
            ...child,
            parentId: parent.id,
          },
        });
      })
    );

    return createdChildrenList;
  }

  async getChildrenByParentId(parentId: string) {
    console.log('ChildService.getChildrenbyParentId');
    const parentService = new ParentService();

    await parentService.getParentById(parentId);

    const prismaClient = new PrismaClient();

    const children = await prismaClient.child.findMany({
      where: {
        parentId: parseInt(parentId),
      },
    });

    console.log('got children', children);

    return children;
  }

  async getChildById(childId: string) {
    if (isValidIdPathParam(childId)) {
      const prismaClient = new PrismaClient();
      const child = await prismaClient.child.findFirst({ where: { id: Number(childId) } });

      if (!child) {
        throw new AppError(`Child not found with id '${childId}'`);
      }
      return child;
    }

    throw new AppError(`Value '${childId}' is an invalid child id `);
  }
}

export default ChildService;
