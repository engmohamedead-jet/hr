import { SalaryItemUpdateManyWithoutSalaryItemGroupsInput } from "./SalaryItemUpdateManyWithoutSalaryItemGroupsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryItemGroupUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  salaryItems?: SalaryItemUpdateManyWithoutSalaryItemGroupsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
