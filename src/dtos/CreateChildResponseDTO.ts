interface CreateChildResponseDTO {
  id: number;
  name: string;
  age: number;
  lastName: string;
  nickname?: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  parentId: number;
}

export default CreateChildResponseDTO;
