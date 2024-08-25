import { EmployeeUpdateManyWithoutEmployeeDepartmentsInput } from "./EmployeeUpdateManyWithoutEmployeeDepartmentsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeDepartmentUpdateInput = {
  code?: string | null;
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutEmployeeDepartmentsInput;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
