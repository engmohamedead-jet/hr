import { Decimal } from "decimal.js";

export type CashTransferCreateInput = {
  amount: Decimal;
  note?: string | null;
  referenceNumber?: string | null;
  statementReference?: string | null;
  transferDate: Date;
};