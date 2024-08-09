import { EmployeeClassSalaryItemValueCreateNestedManyWithoutSalaryItemsInput } from "./EmployeeClassSalaryItemValueCreateNestedManyWithoutSalaryItemsInput";
import { EmployeeSalaryDetailCreateNestedManyWithoutSalaryItemsInput } from "./EmployeeSalaryDetailCreateNestedManyWithoutSalaryItemsInput";

export type SalaryItemCreateInput = {
  code: string;
  description?: string | null;
  employeeClassSalaryItemValues?: EmployeeClassSalaryItemValueCreateNestedManyWithoutSalaryItemsInput;
  employeeSalaryDetails?: EmployeeSalaryDetailCreateNestedManyWithoutSalaryItemsInput;
  name: string;
  normalizedName: string;
  note?: string | null;
};
