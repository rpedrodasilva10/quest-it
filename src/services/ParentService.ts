import Joi from 'joi';
import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import AppError from '../errors/AppError';
import prismaClient from '../prisma';

class ParentService {
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

  async getAllParents() {}

  async findById() {}
}

export default ParentService;
