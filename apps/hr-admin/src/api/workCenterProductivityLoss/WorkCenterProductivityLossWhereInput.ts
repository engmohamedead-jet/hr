import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";
import { WorkCenterProductivityLossTypeWhereUniqueInput } from "../workCenterProductivityLossType/WorkCenterProductivityLossTypeWhereUniqueInput";

export type WorkCenterProductivityLossWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isManual?: BooleanFilter;
  lossType?: "Availability" | "Perfomance" | "Quality" | "Productive";
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  sequence?: IntNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  workCenterId?: WorkCenterWhereUniqueInput;
  workCenterProductivityLossTypeI?: WorkCenterProductivityLossTypeWhereUniqueInput;
};
