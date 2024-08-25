import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";

export type WorkCenterProductivityWhereInput = {
  description?: StringNullableFilter;
  duration?: DecimalNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  workCenterId?: WorkCenterWhereUniqueInput;
};
