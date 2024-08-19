import { SalaryItemGroupWhereUniqueInput } from "../salaryItemGroup/SalaryItemGroupWhereUniqueInput";
import { SalaryItemTypeWhereUniqueInput } from "../salaryItemType/SalaryItemTypeWhereUniqueInput";
import { SalaryLawWhereUniqueInput } from "../salaryLaw/SalaryLawWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryItemUpdateInput = {
  code?: string | null;
  description?: string | null;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  salaryItemGroupId?: SalaryItemGroupWhereUniqueInput | null;
  salaryItemTypeId?: SalaryItemTypeWhereUniqueInput;
  salaryLawId?: SalaryLawWhereUniqueInput | null;
  tenantId?: TenantWhereUniqueInput | null;
};
