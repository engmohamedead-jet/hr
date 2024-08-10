import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerTypeWhereInput = {
  code?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringNullableFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
