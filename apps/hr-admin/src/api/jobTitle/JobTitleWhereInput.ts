import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeListRelationFilter } from "../employee/EmployeeListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type JobTitleWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  employees?: EmployeeListRelationFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
