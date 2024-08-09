import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeSalaryListRelationFilter } from "../employeeSalary/EmployeeSalaryListRelationFilter";

export type FiscalMonthWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  employeeSalaries?: EmployeeSalaryListRelationFilter;
  id?: StringFilter;
  mormalizedName?: StringFilter;
  name?: StringFilter;
  note?: StringNullableFilter;
};
