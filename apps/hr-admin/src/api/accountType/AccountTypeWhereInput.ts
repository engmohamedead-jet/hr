import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type AccountTypeWhereInput = {
  accounts?: AccountListRelationFilter;
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isSystem?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringNullableFilter;
  note?: StringNullableFilter;
};
