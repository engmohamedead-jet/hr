import { EmployeeDepartmentUpdateManyWithoutEmployeeDepartmentsInput } from "./EmployeeDepartmentUpdateManyWithoutEmployeeDepartmentsInput";
import { EmployeeUpdateManyWithoutEmployeeDepartmentsInput } from "./EmployeeUpdateManyWithoutEmployeeDepartmentsInput";
import { EmployeeDepartmentWhereUniqueInput } from "./EmployeeDepartmentWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeDepartmentUpdateInput = {
  code?: string | null;
  description?: string | null;
  employeeDepartments?: EmployeeDepartmentUpdateManyWithoutEmployeeDepartmentsInput;
  employees?: EmployeeUpdateManyWithoutEmployeeDepartmentsInput;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  parentEmployeeDepartmentId?: EmployeeDepartmentWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
