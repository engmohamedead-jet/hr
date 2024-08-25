import { DecimalFilter } from "../../util/DecimalFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";

export type WorkCenterCapacityWhereInput = {
  capacity?: DecimalFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  note?: StringNullableFilter;
  startTime?: DecimalNullableFilter;
  stopTime?: DecimalNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  workCenterId?: WorkCenterWhereUniqueInput;
};
