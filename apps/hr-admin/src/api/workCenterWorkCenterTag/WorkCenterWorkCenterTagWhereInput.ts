import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";
import { WorkCenterTagWhereUniqueInput } from "../workCenterTag/WorkCenterTagWhereUniqueInput";

export type WorkCenterWorkCenterTagWhereInput = {
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  workCenter?: WorkCenterWhereUniqueInput;
  workCenterTagId?: WorkCenterTagWhereUniqueInput;
};
