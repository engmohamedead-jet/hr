import { SalaryItemWhereUniqueInput } from "../salaryItem/SalaryItemWhereUniqueInput";
import { Decimal } from "decimal.js";

export type EmployeeSalaryDetailCreateInput = {
  notes?: string | null;
  salaryItemId: SalaryItemWhereUniqueInput;
  salaryItemValue: Decimal;
  serial: number;
};
