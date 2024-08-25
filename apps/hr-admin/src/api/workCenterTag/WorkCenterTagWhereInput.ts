import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWorkCenterTagListRelationFilter } from "../workCenterWorkCenterTag/WorkCenterWorkCenterTagListRelationFilter";

export type WorkCenterTagWhereInput = {
  Desciption?: StringNullableFilter;
  code?: StringNullableFilter;
  color?: IntNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  workCenterWorkCenterTags?: WorkCenterWorkCenterTagListRelationFilter;
};
