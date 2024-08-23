import { EmployeeUpdateManyWithoutEmployeeRolesInput } from "./EmployeeUpdateManyWithoutEmployeeRolesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeRoleUpdateInput = {
  code?: string | null;
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutEmployeeRolesInput;
  isActive?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
