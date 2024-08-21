import { SalaryItemCreateNestedManyWithoutSalaryItemTypesInput } from "./SalaryItemCreateNestedManyWithoutSalaryItemTypesInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryItemTypeCreateInput = {
  code?: string | null;
  description?: string | null;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  salaryItems?: SalaryItemCreateNestedManyWithoutSalaryItemTypesInput;
  tenantId?: TenantWhereUniqueInput | null;
};
