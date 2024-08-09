import { EmployeeClassWhereUniqueInput } from "../employeeClass/EmployeeClassWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { SalaryItemWhereUniqueInput } from "../salaryItem/SalaryItemWhereUniqueInput";

export type EmployeeClassSalaryItemValueWhereInput = {
  employeeClassId?: EmployeeClassWhereUniqueInput;
  id?: StringFilter;
  itemValue?: DecimalFilter;
  salaryItemId?: SalaryItemWhereUniqueInput;
};
