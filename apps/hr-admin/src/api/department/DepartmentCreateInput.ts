import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { DepartmentCreateNestedManyWithoutDepartmentsInput } from "./DepartmentCreateNestedManyWithoutDepartmentsInput";
import { InputJsonValue } from "../../types";

export type DepartmentCreateInput = {
  departmentId?: DepartmentWhereUniqueInput | null;
  departments?: DepartmentCreateNestedManyWithoutDepartmentsInput;
  description?: string | null;
  name: string;
  normalizedName: string;
  note?: string | null;
  noteJson?: InputJsonValue;
};
