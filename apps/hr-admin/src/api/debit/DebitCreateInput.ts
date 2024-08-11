import { Decimal } from "decimal.js";

export type DebitCreateInput = {
  amountTotal?: Decimal | null;
  contractDate?: Date | null;
  contractNumber?: string | null;
  firstShare?: Decimal | null;
  fourthShare?: Decimal | null;
  note?: string | null;
  paidTotal?: Decimal | null;
  remaining?: Decimal | null;
  secondShare?: Decimal | null;
  thirdShare?: Decimal | null;
};
