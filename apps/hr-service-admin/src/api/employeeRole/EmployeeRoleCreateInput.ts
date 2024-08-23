import { EmployeeCreateNestedManyWithoutEmployeeRolesInput } from "./EmployeeCreateNestedManyWithoutEmployeeRolesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeRoleCreateInput = {
  code?: string | null;
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutEmployeeRolesInput;
  isActive?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
