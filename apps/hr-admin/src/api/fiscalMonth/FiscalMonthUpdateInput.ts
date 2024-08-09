import { EmployeeSalaryUpdateManyWithoutFiscalMonthsInput } from "./EmployeeSalaryUpdateManyWithoutFiscalMonthsInput";

export type FiscalMonthUpdateInput = {
  code?: string;
  description?: string | null;
  employeeSalaries?: EmployeeSalaryUpdateManyWithoutFiscalMonthsInput;
  mormalizedName?: string;
  name?: string;
  note?: string | null;
};
