import { BankListRelationFilter } from "../bank/BankListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type CityWhereInput = {
  banks?: BankListRelationFilter;
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  stateId?: StateWhereUniqueInput;
};
