import { PaymentTerm } from "../paymentTerm/PaymentTerm";
import { Tenant } from "../tenant/Tenant";

export type Period = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  installmentSaleFeePostingPeriodPaymentTerms?: Array<PaymentTerm>;
  isActive: boolean;
  name: string;
  normalizedName: string;
  note: string | null;
  paymentTerms1?: Array<PaymentTerm>;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
