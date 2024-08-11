import { Decimal } from "decimal.js";

export type Debit = {
  amountTotal: Decimal | null;
  contractDate: Date | null;
  contractNumber: string | null;
  createdAt: Date;
  firstShare: Decimal | null;
  fourthShare: Decimal | null;
  id: string;
  note: string | null;
  paidTotal: Decimal | null;
  remaining: Decimal | null;
  secondShare: Decimal | null;
  thirdShare: Decimal | null;
  updatedAt: Date;
};
