import { SalaryItemUpdateManyWithoutSalaryItemTypesInput } from "./SalaryItemUpdateManyWithoutSalaryItemTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryItemTypeUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  salaryItems?: SalaryItemUpdateManyWithoutSalaryItemTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
