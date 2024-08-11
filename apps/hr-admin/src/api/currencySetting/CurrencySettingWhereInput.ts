import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CurrencySettingWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  key?: StringFilter;
  note?: StringNullableFilter;
  value?: StringFilter;
};
