import { Decimal } from "decimal.js";

export type PaymentVoucherCreateInput = {
  amount: Decimal;
  note?: string | null;
  paymentVoucherDate: Date;
  statementReference?: string | null;
};
