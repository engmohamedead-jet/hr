import { EmployeeUpdateManyWithoutEmployeeClassesInput } from "./EmployeeUpdateManyWithoutEmployeeClassesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeClassUpdateInput = {
  code?: string | null;
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutEmployeeClassesInput;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
