interface ChildInChildrenRequestDTO {
  name: string;
  age: number;
  lastName: string;
  nickname?: string;
  email: string;
}

export interface CreateChildRequestDTO {
  parentId: string;
  children: ChildInChildrenRequestDTO[];
}
