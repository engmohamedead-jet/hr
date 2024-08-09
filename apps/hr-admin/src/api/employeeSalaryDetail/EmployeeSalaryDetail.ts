import { SalaryItem } from "../salaryItem/SalaryItem";
import { Decimal } from "decimal.js";

export type EmployeeSalaryDetail = {
  createdAt: Date;
  id: string;
  notes: string | null;
  salaryItemId?: SalaryItem;
  salaryItemValue: Decimal;
  serial: number;
  updatedAt: Date;
};
