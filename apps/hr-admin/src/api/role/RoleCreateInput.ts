import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  isActive?: boolean | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutRolesInput;
};
