import { EmployeeSalaryCreateNestedManyWithoutFiscalMonthsInput } from "./EmployeeSalaryCreateNestedManyWithoutFiscalMonthsInput";

export type FiscalMonthCreateInput = {
  code: string;
  description?: string | null;
  employeeSalaries?: EmployeeSalaryCreateNestedManyWithoutFiscalMonthsInput;
  mormalizedName: string;
  name: string;
  note?: string | null;
};
