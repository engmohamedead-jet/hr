import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LeaveRequestListRelationFilter } from "../leaveRequest/LeaveRequestListRelationFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeaveRequestTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  leavingPermissions?: LeaveRequestListRelationFilter;
  name?: StringNullableFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
};
