import { CashRepositoryWhereUniqueInput } from "./CashRepositoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CashRepositoryWhereInput = {
  cashRepositories?: CashRepositoryWhereUniqueInput;
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
  parentCashRepositoryId?: CashRepositoryWhereUniqueInput;
};
