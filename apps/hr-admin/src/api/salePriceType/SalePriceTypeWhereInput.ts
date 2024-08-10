import { StringFilter } from "../../util/StringFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SalePriceTypeWhereInput = {
  code?: StringFilter;
  customers?: CustomerWhereUniqueInput;
  id?: IntFilter;
  isDefault?: BooleanFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
