import { AccountTransactionDetailListRelationFilter } from "../accountTransactionDetail/AccountTransactionDetailListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type TransactionTypeWhereInput = {
  accountTransactionDetails?: AccountTransactionDetailListRelationFilter;
  code?: StringFilter;
  description?: StringNullableFilter;
  id?: IntFilter;
  name?: StringFilter;
  normalizedName?: StringFilter;
};
