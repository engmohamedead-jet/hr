import { SalaryItemUpdateManyWithoutSalaryLawsInput } from "./SalaryItemUpdateManyWithoutSalaryLawsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryLawUpdateInput = {
  code?: string | null;
  description?: string | null;
  effectiveDate?: Date;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  salaryItems?: SalaryItemUpdateManyWithoutSalaryLawsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
