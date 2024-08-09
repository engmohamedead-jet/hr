import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DepartmentWhereInput = {
  departments?: DepartmentWhereUniqueInput;
  description?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  noteJson?: JsonFilter;
  parentDepartmentId?: DepartmentWhereUniqueInput;
};
