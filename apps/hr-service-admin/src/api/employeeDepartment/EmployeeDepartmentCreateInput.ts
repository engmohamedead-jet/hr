import { EmployeeCreateNestedManyWithoutEmployeeDepartmentsInput } from "./EmployeeCreateNestedManyWithoutEmployeeDepartmentsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeDepartmentCreateInput = {
  code?: string | null;
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutEmployeeDepartmentsInput;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
