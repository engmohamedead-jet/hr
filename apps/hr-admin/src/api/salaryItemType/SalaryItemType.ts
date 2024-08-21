import { SalaryItem } from "../salaryItem/SalaryItem";
import { Tenant } from "../tenant/Tenant";

export type SalaryItemType = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  salaryItems?: Array<SalaryItem>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
