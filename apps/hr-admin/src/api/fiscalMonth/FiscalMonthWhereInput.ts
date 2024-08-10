import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeSalaryListRelationFilter } from "../employeeSalary/EmployeeSalaryListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FiscalWeekListRelationFilter } from "../fiscalWeek/FiscalWeekListRelationFilter";
import { FiscalYearWhereUniqueInput } from "../fiscalYear/FiscalYearWhereUniqueInput";

export type FiscalMonthWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  employeeSalaries?: EmployeeSalaryListRelationFilter;
  endsOn?: DateTimeNullableFilter;
  fiscalWeeks?: FiscalWeekListRelationFilter;
  fiscalYear?: FiscalYearWhereUniqueInput;
  id?: StringFilter;
  mormalizedName?: StringFilter;
  name?: StringFilter;
  note?: StringNullableFilter;
  startsFrom?: DateTimeNullableFilter;
};
