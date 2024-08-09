import { EmployeeClassSalaryItemValueCreateNestedManyWithoutEmployeeClassesInput } from "./EmployeeClassSalaryItemValueCreateNestedManyWithoutEmployeeClassesInput";

export type EmployeeClassCreateInput = {
  code: string;
  description?: string | null;
  employeeClassSalaryItemValues?: EmployeeClassSalaryItemValueCreateNestedManyWithoutEmployeeClassesInput;
  name: string;
  normalizedName: string;
  notes?: string | null;
};
