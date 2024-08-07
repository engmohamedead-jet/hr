import { UserUpdateManyWithoutRolesInput } from "./UserUpdateManyWithoutRolesInput";

export type RoleUpdateInput = {
  isActive?: boolean | null;
  name?: string | null;
  users?: UserUpdateManyWithoutRolesInput;
};
