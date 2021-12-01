interface ChildInChildrenRequestDTO {
  name: string;

  ;
  ;
  email: string;
  password: string;
}

export interface CreateChildRequestDTO {
  parentId: string;
  children: ChildInChildrenRequestDTO[];
}
