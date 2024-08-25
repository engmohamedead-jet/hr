import { EmployeeRoleWhereInput } from "./EmployeeRoleWhereInput";
import { EmployeeRoleOrderByInput } from "./EmployeeRoleOrderByInput";

export type EmployeeRoleFindManyArgs = {
  where?: EmployeeRoleWhereInput;
  orderBy?: Array<EmployeeRoleOrderByInput>;
  skip?: number;
  take?: number;
};
