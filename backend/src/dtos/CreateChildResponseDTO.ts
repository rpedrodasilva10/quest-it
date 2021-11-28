interface CreateChildResponseDTO {
  id: number;
  name: string;
  birthDate: String;
  lastName: string;
  nickname?: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  parentId: number;
}

export default CreateChildResponseDTO;
