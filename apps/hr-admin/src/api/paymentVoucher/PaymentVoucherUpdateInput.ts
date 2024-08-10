import { Decimal } from "decimal.js";

export type PaymentVoucherUpdateInput = {
  amount?: Decimal;
  note?: string | null;
  paymentVoucherDate?: Date;
  statementReference?: string | null;
};
