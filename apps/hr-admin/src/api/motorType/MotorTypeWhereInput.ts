import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ElevatorListRelationFilter } from "../elevator/ElevatorListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type MotorTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  elevators?: ElevatorListRelationFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringNullableFilter;
  notes?: StringNullableFilter;
};
