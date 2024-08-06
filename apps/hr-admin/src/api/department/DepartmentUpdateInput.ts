import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { DepartmentUpdateManyWithoutDepartmentsInput } from "./DepartmentUpdateManyWithoutDepartmentsInput";
import { InputJsonValue } from "../../types";

export type DepartmentUpdateInput = {
  departmentId?: DepartmentWhereUniqueInput | null;
  departments?: DepartmentUpdateManyWithoutDepartmentsInput;
  description?: string | null;
  name?: string;
  normalizedName?: string;
  note?: string | null;
  noteJson?: InputJsonValue;
};
