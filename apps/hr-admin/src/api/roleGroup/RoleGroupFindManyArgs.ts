import { RoleGroupWhereInput } from "./RoleGroupWhereInput";
import { RoleGroupOrderByInput } from "./RoleGroupOrderByInput";

export type RoleGroupFindManyArgs = {
  where?: RoleGroupWhereInput;
  orderBy?: Array<RoleGroupOrderByInput>;
  skip?: number;
  take?: number;
};
