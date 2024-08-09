import { FiscalMonthWhereUniqueInput } from "../fiscalMonth/FiscalMonthWhereUniqueInput";
import { Decimal } from "decimal.js";

export type EmployeeSalaryCreateInput = {
  fiscalMonthId: FiscalMonthWhereUniqueInput;
  netSalary: Decimal;
  note?: string | null;
  totalDeserved: Decimal;
  totalDiscount: Decimal;
};
