import { EmployeeUpdateManyWithoutJobTitlesInput } from "./EmployeeUpdateManyWithoutJobTitlesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type JobTitleUpdateInput = {
  code?: string | null;
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutJobTitlesInput;
  isActive?: boolean | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  tenantId?: TenantWhereUniqueInput | null;
};
