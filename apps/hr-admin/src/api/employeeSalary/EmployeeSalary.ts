import { FiscalMonth } from "../fiscalMonth/FiscalMonth";
import { Decimal } from "decimal.js";

export type EmployeeSalary = {
  createdAt: Date;
  fiscalMonthId?: FiscalMonth;
  id: string;
  netSalary: Decimal;
  note: string | null;
  totalDeserved: Decimal;
  totalDiscount: Decimal;
  updatedAt: Date;
};
