interface ParentResponseDTO {
  id: number;
  name: string;
  surname: string;
  nickname?: string;
  createdAt: Date;
  updatedAt: Date;
  email: string;
}

export default ParentResponseDTO;
