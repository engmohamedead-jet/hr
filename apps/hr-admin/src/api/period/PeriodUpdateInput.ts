import { PaymentTermUpdateManyWithoutPeriodsInput } from "./PaymentTermUpdateManyWithoutPeriodsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PeriodUpdateInput = {
  code?: string | null;
  description?: string | null;
  installmentSaleFeePostingPeriodPaymentTerms?: PaymentTermUpdateManyWithoutPeriodsInput;
  isActive?: boolean;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentTerms1?: PaymentTermUpdateManyWithoutPeriodsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
