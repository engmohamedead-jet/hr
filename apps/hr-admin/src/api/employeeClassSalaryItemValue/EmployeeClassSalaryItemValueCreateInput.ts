import { EmployeeClassWhereUniqueInput } from "../employeeClass/EmployeeClassWhereUniqueInput";
import { Decimal } from "decimal.js";
import { SalaryItemWhereUniqueInput } from "../salaryItem/SalaryItemWhereUniqueInput";

export type EmployeeClassSalaryItemValueCreateInput = {
  employeeClassId: EmployeeClassWhereUniqueInput;
  itemValue: Decimal;
  salaryItemId: SalaryItemWhereUniqueInput;
};
