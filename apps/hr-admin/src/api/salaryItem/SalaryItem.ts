import { SalaryItemGroup } from "../salaryItemGroup/SalaryItemGroup";
import { SalaryItemType } from "../salaryItemType/SalaryItemType";
import { SalaryLaw } from "../salaryLaw/SalaryLaw";
import { Tenant } from "../tenant/Tenant";

export type SalaryItem = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  salaryItemGroupId?: SalaryItemGroup | null;
  salaryItemTypeId?: SalaryItemType;
  salaryLawId?: SalaryLaw | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
