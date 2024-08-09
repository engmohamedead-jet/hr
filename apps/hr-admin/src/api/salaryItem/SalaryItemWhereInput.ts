import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeClassSalaryItemValueListRelationFilter } from "../employeeClassSalaryItemValue/EmployeeClassSalaryItemValueListRelationFilter";
import { EmployeeSalaryDetailListRelationFilter } from "../employeeSalaryDetail/EmployeeSalaryDetailListRelationFilter";

export type SalaryItemWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  employeeClassSalaryItemValues?: EmployeeClassSalaryItemValueListRelationFilter;
  employeeSalaryDetails?: EmployeeSalaryDetailListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
