import { hashSync } from 'bcrypt';
import Joi from 'joi';
import { CreateChildRequestDTO } from '../dtos/CreateChilldRequestDTO';
import AppError from '../errors/AppError';
import prismaClient from '../prisma';
import isValidIdPathParam from '../utils/isValidIdPathParam';
import ParentService from './ParentService';

class ChildService {
  async createChild(payload: CreateChildRequestDTO) {
    console.log('ChildService.createChild');
    const schema = Joi.object({
      parentId: Joi.number().required(),
      children: Joi.array().items({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
      }),
    });

    await schema.validateAsync(payload, {
      abortEarly: false,
    });

    const parentService = new ParentService();

    const parent = await parentService.getParentById(payload.parentId);

    const createdChildrenList = Promise.all(
      payload.children.map(async (child) => {
        const { password, ...payloadWithoutPassword } = child;
        const created = await prismaClient.child.create({
          data: {
            password: hashSync(password, parseInt(process.env.PASSWORD_SALT_ROUNDS)),
            ...payloadWithoutPassword,
            parentId: parent.id,
          },
        });

        delete created.password;
        return created;
      })
    );

    return createdChildrenList;
  }

  async getChildrenByParentId(parentId: string) {
    console.log('ChildService.getChildrenbyParentId');
    const parentService = new ParentService();

    await parentService.getParentById(parentId);

    const children = await prismaClient.child.findMany({
      select: {
        id: true,
        name: true,

        email: true,
        createdAt: true,
        updatedAt: true,
      },
      where: {
        parentId: parseInt(parentId),
      },
    });

    return children;
  }

  async getChildById(childId: string) {
    console.log('ChildService.getChildById');
    if (isValidIdPathParam(childId)) {
      const child = await prismaClient.child.findFirst({ where: { id: Number(childId) } });

      if (!child) {
        throw new AppError(`Child not found with id '${childId}'`);
      }
      return child;
    }

    throw new AppError(`Value '${childId}' is an invalid child id `);
  }

  async getChildByEmail(email: string) {
    console.log('ChildService.getChildByEmail');

    const child = await prismaClient.child.findFirst({
      where: {
        email,
      },
    });

    return child;
  }
}

export default ChildService;
