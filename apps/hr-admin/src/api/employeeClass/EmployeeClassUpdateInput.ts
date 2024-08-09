import { EmployeeClassSalaryItemValueUpdateManyWithoutEmployeeClassesInput } from "./EmployeeClassSalaryItemValueUpdateManyWithoutEmployeeClassesInput";

export type EmployeeClassUpdateInput = {
  code?: string;
  description?: string | null;
  employeeClassSalaryItemValues?: EmployeeClassSalaryItemValueUpdateManyWithoutEmployeeClassesInput;
  name?: string;
  normalizedName?: string;
  notes?: string | null;
};
