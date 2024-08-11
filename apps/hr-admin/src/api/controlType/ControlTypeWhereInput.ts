import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ElevatorListRelationFilter } from "../elevator/ElevatorListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type ControlTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringFilter;
  elevators?: ElevatorListRelationFilter;
  id?: IntFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  note?: StringNullableFilter;
  noted?: StringNullableFilter;
};
