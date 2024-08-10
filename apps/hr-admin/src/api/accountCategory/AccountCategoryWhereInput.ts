import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AccountCategoryWhereInput = {
  accounts?: AccountListRelationFilter;
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
