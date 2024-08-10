import { AccountTransactionListRelationFilter } from "../accountTransaction/AccountTransactionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CostCenterWhereInput = {
  accountTransactions?: AccountTransactionListRelationFilter;
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isSystem?: BooleanNullableFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
  note?: StringNullableFilter;
};
