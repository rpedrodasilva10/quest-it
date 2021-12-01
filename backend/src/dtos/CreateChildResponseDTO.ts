interface CreateChildResponseDTO {
  id: number;
  name: string;

  lastName: string;
  nickname?: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  parentId: number;
}

export default CreateChildResponseDTO;
