import { BankListRelationFilter } from "../bank/BankListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type BankTypeWhereInput = {
  banks?: BankListRelationFilter;
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  isActive?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
