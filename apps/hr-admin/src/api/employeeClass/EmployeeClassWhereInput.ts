import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeClassSalaryItemValueListRelationFilter } from "../employeeClassSalaryItemValue/EmployeeClassSalaryItemValueListRelationFilter";

export type EmployeeClassWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  employeeClassSalaryItemValues?: EmployeeClassSalaryItemValueListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  notes?: StringNullableFilter;
};
