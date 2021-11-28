interface ChildInChildrenRequestDTO {
  name: string;
  birthDate: String;
  lastName: string;
  nickname?: string;
  email: string;
  password: string;
}

export interface CreateChildRequestDTO {
  parentId: string;
  children: ChildInChildrenRequestDTO[];
}
