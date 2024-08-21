import { PaymentTermCreateNestedManyWithoutPeriodsInput } from "./PaymentTermCreateNestedManyWithoutPeriodsInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PeriodCreateInput = {
  code?: string | null;
  description?: string | null;
  installmentSaleFeePostingPeriodPaymentTerms?: PaymentTermCreateNestedManyWithoutPeriodsInput;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note?: string | null;
  paymentTerms1?: PaymentTermCreateNestedManyWithoutPeriodsInput;
  tenantId?: TenantWhereUniqueInput | null;
};
