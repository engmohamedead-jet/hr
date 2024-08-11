import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type PressTypeWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  notes?: StringNullableFilter;
};
