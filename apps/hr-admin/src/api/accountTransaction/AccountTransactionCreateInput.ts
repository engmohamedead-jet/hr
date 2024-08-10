import { AccountTransactionDetailCreateNestedManyWithoutAccountTransactionsInput } from "./AccountTransactionDetailCreateNestedManyWithoutAccountTransactionsInput";
import { CostCenterWhereUniqueInput } from "../costCenter/CostCenterWhereUniqueInput";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";

export type AccountTransactionCreateInput = {
  accountTransactionDetails?: AccountTransactionDetailCreateNestedManyWithoutAccountTransactionsInput;
  costCenter?: CostCenterWhereUniqueInput | null;
  note?: string | null;
  referenceNumber?: string | null;
  statementReference?: string | null;
  store: StoreWhereUniqueInput;
  transactionDate?: Date | null;
};
