import { Decimal } from "decimal.js";

export type Employee = {
  balance: Decimal | null;
  createdAt: Date;
  id: string;
  lastYearBalance: Decimal | null;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  remainingBalance: Decimal | null;
  updatedAt: Date;
  usedBalance: Decimal | null;
};
