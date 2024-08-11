import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentTypeWhereInput = {
  code?: StringNullableFilter;
  id?: IntFilter;
  isDefault?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  notes?: StringNullableFilter;
};
