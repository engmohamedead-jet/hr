import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeClassSalaryItemValueListRelationFilter } from "../employeeClassSalaryItemValue/EmployeeClassSalaryItemValueListRelationFilter";
import { EmployeeSalaryDetailListRelationFilter } from "../employeeSalaryDetail/EmployeeSalaryDetailListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type SalaryItemWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  employeeClassSalaryItemValues?: EmployeeClassSalaryItemValueListRelationFilter;
  employeeSalaryDetails?: EmployeeSalaryDetailListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
