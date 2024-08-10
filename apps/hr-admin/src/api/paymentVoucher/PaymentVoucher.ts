import { Decimal } from "decimal.js";

export type PaymentVoucher = {
  amount: Decimal;
  createdAt: Date;
  id: string;
  note: string | null;
  paymentVoucherDate: Date;
  statementReference: string | null;
  updatedAt: Date;
};
