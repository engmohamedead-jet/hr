import { AccountTransactionDetailListRelationFilter } from "../accountTransactionDetail/AccountTransactionDetailListRelationFilter";
import { CostCenterWhereUniqueInput } from "../costCenter/CostCenterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AccountTransactionWhereInput = {
  accountTransactionDetails?: AccountTransactionDetailListRelationFilter;
  costCenter?: CostCenterWhereUniqueInput;
  id?: StringFilter;
  note?: StringNullableFilter;
  referenceNumber?: StringNullableFilter;
  statementReference?: StringNullableFilter;
  store?: StoreWhereUniqueInput;
  transactionDate?: DateTimeNullableFilter;
};
