import { Decimal } from "decimal.js";
import { Department } from "../department/Department";

export type Employee = {
  balance: Decimal | null;
  createdAt: Date;
  departmentId?: Department | null;
  id: string;
  lastYearBalance: Decimal | null;
  name: string | null;
  normalizedName: string | null;
  note: string | null;
  remainingBalance: Decimal | null;
  updatedAt: Date;
  usedBalance: Decimal | null;
};
