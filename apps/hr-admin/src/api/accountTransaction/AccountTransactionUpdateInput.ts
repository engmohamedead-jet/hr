import { AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput } from "./AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput";
import { CostCenterWhereUniqueInput } from "../costCenter/CostCenterWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type AccountTransactionUpdateInput = {
  accountTransactionDetails?: AccountTransactionDetailUpdateManyWithoutAccountTransactionsInput;
  costCenter?: CostCenterWhereUniqueInput | null;
  note?: string | null;
  referenceNumber?: string | null;
  statementReference?: string | null;
  store?: StoreWhereUniqueInput;
  transactionDate?: Date | null;
};
