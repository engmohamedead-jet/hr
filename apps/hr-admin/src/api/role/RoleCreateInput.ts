import { UserCreateNestedManyWithoutRolesInput } from "./UserCreateNestedManyWithoutRolesInput";

export type RoleCreateInput = {
  description?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutRolesInput;
};
