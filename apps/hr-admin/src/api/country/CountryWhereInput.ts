import { BankListRelationFilter } from "../bank/BankListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StateListRelationFilter } from "../state/StateListRelationFilter";

export type CountryWhereInput = {
  banks?: BankListRelationFilter;
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  states?: StateListRelationFilter;
};
