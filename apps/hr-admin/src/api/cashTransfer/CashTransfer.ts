import { Decimal } from "decimal.js";

export type CashTransfer = {
  amount: Decimal;
  createdAt: Date;
  id: string;
  note: string | null;
  referenceNumber: string | null;
  statementReference: string | null;
  transferDate: Date;
  updatedAt: Date;
};
