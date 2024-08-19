import { Account } from "../account/Account";
import { PaymentTerm } from "../paymentTerm/PaymentTerm";
import { Decimal } from "decimal.js";
import { Tenant } from "../tenant/Tenant";

export type InstallmentSaleFee = {
  accountId?: Account | null;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isActive: boolean;
  isFlatAmount: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  paymentTerms?: Array<PaymentTerm>;
  rate: Decimal | null;
  tenantId?: Tenant | null;
  updatedAt: Date;
};
