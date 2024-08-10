import { EmployeeSalaryUpdateManyWithoutFiscalMonthsInput } from "./EmployeeSalaryUpdateManyWithoutFiscalMonthsInput";
import { FiscalWeekUpdateManyWithoutFiscalMonthsInput } from "./FiscalWeekUpdateManyWithoutFiscalMonthsInput";
import { FiscalYearWhereUniqueInput } from "../fiscalYear/FiscalYearWhereUniqueInput";

export type FiscalMonthUpdateInput = {
  code?: string;
  description?: string | null;
  employeeSalaries?: EmployeeSalaryUpdateManyWithoutFiscalMonthsInput;
  endsOn?: Date | null;
  fiscalWeeks?: FiscalWeekUpdateManyWithoutFiscalMonthsInput;
  fiscalYear?: FiscalYearWhereUniqueInput;
  mormalizedName?: string;
  name?: string;
  note?: string | null;
  startsFrom?: Date | null;
};
