import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';
import prismaClient from '../prisma';

class ParentService {
  async createParent({ name, surname, nickname }: CreateParentRequestDTO) {
    const created = await prismaClient.parent.create({
      data: {
        name,
        nickname,
        surname,
      },
    });

    return created;
  }

  async getAllParents() {}

  async findById() {}
}

export default ParentService;
