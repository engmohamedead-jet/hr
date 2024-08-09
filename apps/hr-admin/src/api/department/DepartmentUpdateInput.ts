import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { EmployeeUpdateManyWithoutDepartmentsInput } from "./EmployeeUpdateManyWithoutDepartmentsInput";
import { InputJsonValue } from "../../types";

export type DepartmentUpdateInput = {
  departments?: DepartmentWhereUniqueInput | null;
  description?: string | null;
  employees?: EmployeeUpdateManyWithoutDepartmentsInput;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  noteJson?: InputJsonValue;
  parentDepartmentId?: DepartmentWhereUniqueInput | null;
};
