import { EmployeeCreateNestedManyWithoutEmployeeClassesInput } from "./EmployeeCreateNestedManyWithoutEmployeeClassesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeClassCreateInput = {
  code?: string | null;
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutEmployeeClassesInput;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
