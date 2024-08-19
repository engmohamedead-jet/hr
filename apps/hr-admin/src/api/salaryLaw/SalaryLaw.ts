import { SalaryItem } from "../salaryItem/SalaryItem";
import { Tenant } from "../tenant/Tenant";

export type SalaryLaw = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  effectiveDate: Date;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  salaryItems?: Array<SalaryItem>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
