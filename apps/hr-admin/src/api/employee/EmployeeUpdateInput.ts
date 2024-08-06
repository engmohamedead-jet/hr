import { Decimal } from "decimal.js";

export type EmployeeUpdateInput = {
  balance?: Decimal | null;
  lastYearBalance?: Decimal | null;
  name?: string | null;
  normalizedName?: string | null;
  note?: string | null;
  remainingBalance?: Decimal | null;
  usedBalance?: Decimal | null;
};
