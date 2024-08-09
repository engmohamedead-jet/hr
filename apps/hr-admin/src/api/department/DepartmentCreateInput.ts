import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { EmployeeCreateNestedManyWithoutDepartmentsInput } from "./EmployeeCreateNestedManyWithoutDepartmentsInput";
import { InputJsonValue } from "../../types";

export type DepartmentCreateInput = {
  departments?: DepartmentWhereUniqueInput | null;
  description?: string | null;
  employees?: EmployeeCreateNestedManyWithoutDepartmentsInput;
  name: string;
  normalizedName: string;
  note?: string | null;
  noteJson?: InputJsonValue;
  parentDepartmentId?: DepartmentWhereUniqueInput | null;
};
