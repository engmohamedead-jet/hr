import { EmployeeSalaryCreateNestedManyWithoutFiscalMonthsInput } from "./EmployeeSalaryCreateNestedManyWithoutFiscalMonthsInput";
import { FiscalWeekCreateNestedManyWithoutFiscalMonthsInput } from "./FiscalWeekCreateNestedManyWithoutFiscalMonthsInput";
import { FiscalYearWhereUniqueInput } from "../fiscalYear/FiscalYearWhereUniqueInput";

export type FiscalMonthCreateInput = {
  code: string;
  description?: string | null;
  employeeSalaries?: EmployeeSalaryCreateNestedManyWithoutFiscalMonthsInput;
  endsOn?: Date | null;
  fiscalWeeks?: FiscalWeekCreateNestedManyWithoutFiscalMonthsInput;
  fiscalYear: FiscalYearWhereUniqueInput;
  mormalizedName: string;
  name: string;
  note?: string | null;
  startsFrom?: Date | null;
};
