import { BillOfMaterialDetailListRelationFilter } from "../billOfMaterialDetail/BillOfMaterialDetailListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { WorkCenterWhereUniqueInput } from "../workCenter/WorkCenterWhereUniqueInput";

export type WorkCenterRoutingWhereInput = {
  billOfMaterialDetails?: BillOfMaterialDetailListRelationFilter;
  code?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  sequence?: IntNullableFilter;
  timeCycleManual?: DecimalNullableFilter;
  timeModeBatch?: IntNullableFilter;
  workCenter?: WorkCenterWhereUniqueInput;
};
