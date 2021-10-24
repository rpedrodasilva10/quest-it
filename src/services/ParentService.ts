import CreateParentRequestDTO from '../dtos/CreateParentRequestDTO';

class ParentService {
  async createParent(inputDTO: CreateParentRequestDTO) {
    return { message: 'ok' };
  }

  async getAllParents() {}

  async findById() {}
}

export default ParentService;
