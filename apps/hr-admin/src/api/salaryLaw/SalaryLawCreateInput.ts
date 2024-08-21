import { SalaryItemCreateNestedManyWithoutSalaryLawsInput } from "./SalaryItemCreateNestedManyWithoutSalaryLawsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type SalaryLawCreateInput = {
  code?: string | null;
  description?: string | null;
  effectiveDate: Date;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  salaryItems?: SalaryItemCreateNestedManyWithoutSalaryLawsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
