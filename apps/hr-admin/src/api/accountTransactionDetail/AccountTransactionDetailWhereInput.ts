import { AccountTransactionWhereUniqueInput } from "../accountTransaction/AccountTransactionWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TransactionTypeWhereUniqueInput } from "../transactionType/TransactionTypeWhereUniqueInput";

export type AccountTransactionDetailWhereInput = {
  accountTransactionId?: AccountTransactionWhereUniqueInput;
  credit?: DecimalFilter;
  debit?: DecimalFilter;
  exchangeRate?: DecimalNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  referenceNumber?: StringNullableFilter;
  serial?: IntNullableFilter;
  statementReference?: StringNullableFilter;
  storeId?: StoreWhereUniqueInput;
  transactionDate?: DateTimeNullableFilter;
  transactionTypeId?: TransactionTypeWhereUniqueInput;
};
