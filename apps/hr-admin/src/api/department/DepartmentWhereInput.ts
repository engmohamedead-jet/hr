import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { DepartmentListRelationFilter } from "./DepartmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DepartmentWhereInput = {
  departmentId?: DepartmentWhereUniqueInput;
  departments?: DepartmentListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  noteJson?: JsonFilter;
};
