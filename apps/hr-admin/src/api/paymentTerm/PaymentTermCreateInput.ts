import { PeriodWhereUniqueInput } from "../period/PeriodWhereUniqueInput";
import { InstallmentSaleFeeWhereUniqueInput } from "../installmentSaleFee/InstallmentSaleFeeWhereUniqueInput";

export type PaymentTermCreateInput = {
  code?: string | null;
  description?: string | null;
  dueDays?: number | null;
  dueOnDate?: Date | null;
  duePeriodId?: PeriodWhereUniqueInput | null;
  gracePeriod?: number | null;
  installmentSaleFeeId?: InstallmentSaleFeeWhereUniqueInput | null;
  installmentSaleFeePostingPeriodId?: PeriodWhereUniqueInput | null;
  isDefault?: boolean | null;
  name?: string | null;
  normalizedName?: string | null;
};
