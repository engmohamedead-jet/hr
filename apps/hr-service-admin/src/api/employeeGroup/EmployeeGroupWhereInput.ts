import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type EmployeeGroupWhereInput = {
  code?: StringNullableFilter;
  descripption?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringFilter;
  normalziedName?: StringFilter;
  note?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
