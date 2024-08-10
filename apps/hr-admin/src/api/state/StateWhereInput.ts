import { BankListRelationFilter } from "../bank/BankListRelationFilter";
import { CityListRelationFilter } from "../city/CityListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StateWhereInput = {
  banks?: BankListRelationFilter;
  cities?: CityListRelationFilter;
  code?: StringFilter;
  countryId?: CountryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
