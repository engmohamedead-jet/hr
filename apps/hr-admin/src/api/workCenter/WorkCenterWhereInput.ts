import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { WorkCenterRoutingListRelationFilter } from "../workCenterRouting/WorkCenterRoutingListRelationFilter";

export type WorkCenterWhereInput = {
  analyticDistribution?: StringNullableFilter;
  code?: StringNullableFilter;
  color?: IntNullableFilter;
  costPerHour?: DecimalNullableFilter;
  defaultCapacity?: DecimalNullableFilter;
  id?: IntFilter;
  isActive?: BooleanFilter;
  isProductive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  oeeTareget?: DecimalNullableFilter;
  sequence?: IntNullableFilter;
  startTime?: DecimalNullableFilter;
  stopTime?: DecimalNullableFilter;
  timeEfficiency?: DecimalNullableFilter;
  workCenterRoutings?: WorkCenterRoutingListRelationFilter;
};