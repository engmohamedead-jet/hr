import { EmployeeDepartmentCreateNestedManyWithoutEmployeeDepartmentsInput } from "./EmployeeDepartmentCreateNestedManyWithoutEmployeeDepartmentsInput";
import { EmployeeCreateNestedManyWithoutEmployeeDepartmentsInput } from "./EmployeeCreateNestedManyWithoutEmployeeDepartmentsInput";
import { EmployeeDepartmentWhereUniqueInput } from "./EmployeeDepartmentWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeDepartmentCreateInput = {
  code?: string | null;
  description?: string | null;
  employeeDepartments?: EmployeeDepartmentCreateNestedManyWithoutEmployeeDepartmentsInput;
  employees?: EmployeeCreateNestedManyWithoutEmployeeDepartmentsInput;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  parentEmployeeDepartmentId?: EmployeeDepartmentWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
