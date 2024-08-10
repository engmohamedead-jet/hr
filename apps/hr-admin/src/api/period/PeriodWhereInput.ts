import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PeriodWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
