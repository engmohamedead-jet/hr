import { AdminRoleWhereInput } from "./AdminRoleWhereInput";
import { AdminRoleOrderByInput } from "./AdminRoleOrderByInput";

export type AdminRoleFindManyArgs = {
  where?: AdminRoleWhereInput;
  orderBy?: Array<AdminRoleOrderByInput>;
  skip?: number;
  take?: number;
};
