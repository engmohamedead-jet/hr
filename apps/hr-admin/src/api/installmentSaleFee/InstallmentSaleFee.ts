import { Account } from "../account/Account";
import { PaymentTerm } from "../paymentTerm/PaymentTerm";
import { Decimal } from "decimal.js";

export type InstallmentSaleFee = {
  account?: Account | null;
  code: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  isFlatAmount: boolean | null;
  name: string;
  normalizedName: string;
  note: string | null;
  paymentTerms?: Array<PaymentTerm>;
  rate: Decimal | null;
  updatedAt: Date;
};
