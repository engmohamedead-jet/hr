import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  description?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  users?: UserUpdateManyWithoutRolesInput;
};
