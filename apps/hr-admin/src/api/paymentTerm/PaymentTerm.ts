import { Period } from "../period/Period";
import { InstallmentSaleFee } from "../installmentSaleFee/InstallmentSaleFee";

export type PaymentTerm = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  dueDays: number | null;
  dueOnDate: Date | null;
  duePeriodId?: Period | null;
  gracePeriod: number | null;
  id: string;
  installmentSaleFeeId?: InstallmentSaleFee | null;
  installmentSaleFeePostingPeriodId?: Period | null;
  isDefault: boolean | null;
  name: string | null;
  normalizedName: string | null;
  updatedAt: Date;
};
