import { EmployeeClassWhereUniqueInput } from "../employeeClass/EmployeeClassWhereUniqueInput";
import { Decimal } from "decimal.js";
import { SalaryItemWhereUniqueInput } from "../salaryItem/SalaryItemWhereUniqueInput";

export type EmployeeClassSalaryItemValueUpdateInput = {
  employeeClassId?: EmployeeClassWhereUniqueInput;
  itemValue?: Decimal;
  salaryItemId?: SalaryItemWhereUniqueInput;
};
