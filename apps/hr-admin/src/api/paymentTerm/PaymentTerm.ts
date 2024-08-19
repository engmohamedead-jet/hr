import { Period } from "../period/Period";
import { InstallmentSaleFee } from "../installmentSaleFee/InstallmentSaleFee";
import { Tenant } from "../tenant/Tenant";

export type PaymentTerm = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  dueDays: number;
  duePeriodId?: Period | null;
  gracePeriod: number;
  id: string;
  installmentSaleFeeId?: InstallmentSaleFee | null;
  installmentSaleFeePostingPeriod?: Period | null;
  isActive: boolean;
  isDefault: boolean | null;
  isDueOnDate: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
