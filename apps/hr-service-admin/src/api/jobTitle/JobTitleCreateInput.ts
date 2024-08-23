import { EmployeeCreateNestedManyWithoutJobTitlesInput } from "./EmployeeCreateNestedManyWithoutJobTitlesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type JobTitleCreateInput = {
  code?: string | null;
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutJobTitlesInput;
  isActive?: boolean | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
