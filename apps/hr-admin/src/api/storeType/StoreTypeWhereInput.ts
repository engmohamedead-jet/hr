import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StoreListRelationFilter } from "../store/StoreListRelationFilter";

export type StoreTypeWhereInput = {
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isDefault?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  stores?: StoreListRelationFilter;
};
