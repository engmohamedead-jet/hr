import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CurrencyWhereInput = {
  code?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
