interface ChildInChildrenRequestDTO {
  name: string;
  birthDate: string;
  lastName: string;
  nickname?: string;
  email: string;
  password: string;
}

export interface CreateChildRequestDTO {
  parentId: string;
  children: ChildInChildrenRequestDTO[];
}
