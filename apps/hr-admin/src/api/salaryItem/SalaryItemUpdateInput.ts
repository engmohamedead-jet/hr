import { EmployeeClassSalaryItemValueUpdateManyWithoutSalaryItemsInput } from "./EmployeeClassSalaryItemValueUpdateManyWithoutSalaryItemsInput";
import { EmployeeSalaryDetailUpdateManyWithoutSalaryItemsInput } from "./EmployeeSalaryDetailUpdateManyWithoutSalaryItemsInput";

export type SalaryItemUpdateInput = {
  code?: string;
  description?: string | null;
  employeeClassSalaryItemValues?: EmployeeClassSalaryItemValueUpdateManyWithoutSalaryItemsInput;
  employeeSalaryDetails?: EmployeeSalaryDetailUpdateManyWithoutSalaryItemsInput;
  name?: string;
  normalizedName?: string;
  note?: string | null;
};
