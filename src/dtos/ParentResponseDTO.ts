interface ParentResponseDTO {
  id: number;
  name: string;
  lastName: string;
  nickname?: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
}

export default ParentResponseDTO;
