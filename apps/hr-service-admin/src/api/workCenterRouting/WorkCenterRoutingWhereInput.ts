import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntFilter } from "../../util/IntFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";

export type WorkCenterRoutingWhereInput = {
  billOfMaterialId?: StringNullableFilter;
  code?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  sequence?: IntFilter;
  tenant?: TenantWhereUniqueInput;
  timeCycleManual?: DecimalNullableFilter;
  timeModeBatch?: IntNullableFilter;
  workCenterId?: WorkCenterWhereUniqueInput;
};
