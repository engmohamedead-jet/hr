import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type BankTypeWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
