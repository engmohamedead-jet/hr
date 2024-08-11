import { PaymentTermWhereUniqueInput } from "../paymentTerm/PaymentTermWhereUniqueInput";

export type PeriodUpdateInput = {
  code?: string;
  description?: string | null;
  installmentSaleFeePostingPeriod?: PaymentTermWhereUniqueInput | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  paymentTerms?: PaymentTermWhereUniqueInput | null;
};
