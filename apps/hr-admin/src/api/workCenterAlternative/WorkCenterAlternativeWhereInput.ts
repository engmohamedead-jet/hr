import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type WorkCenterAlternativeWhereInput = {
  alternativeWorkCenterId?: WorkCenterWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  note?: StringNullableFilter;
  tenantId?: TenantWhereUniqueInput;
  workCenterId?: WorkCenterWhereUniqueInput;
};
