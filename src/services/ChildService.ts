import { PrismaClient } from '.prisma/client';
import { CreateChildRequestDTO } from '../dtos/CreateChilldRequestDTO';
import ParentService from './ParentService';

class ChildService {
  async createChild(payload: CreateChildRequestDTO) {
    console.log('ChildService.createChild');
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
}

export default ChildService;
