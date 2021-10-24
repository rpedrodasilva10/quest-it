import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import AppError from '../errors/AppError';
import prismaClient from '../prisma';

class ParentService {
  async createParent(payload: CreateParentRequestDTO) {
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
