interface ChildInChildrenRequestDTO {
  name: string;
  age: number;
  lastName: string;
  nickname?: string;
  email: string;
  password: string;
}

export interface CreateChildRequestDTO {
  parentId: string;
  children: ChildInChildrenRequestDTO[];
}
