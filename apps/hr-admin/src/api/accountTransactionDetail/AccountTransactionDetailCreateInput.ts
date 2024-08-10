import { AccountTransactionWhereUniqueInput } from "../accountTransaction/AccountTransactionWhereUniqueInput";
import { Decimal } from "decimal.js";
import { StoreWhereUniqueInput } from "../store/StoreWhereUniqueInput";
import { TransactionTypeWhereUniqueInput } from "../transactionType/TransactionTypeWhereUniqueInput";

export type AccountTransactionDetailCreateInput = {
  accountTransactionId: AccountTransactionWhereUniqueInput;
  credit: Decimal;
  debit: Decimal;
  exchangeRate?: Decimal | null;
  note?: string | null;
  referenceNumber?: string | null;
  serial?: number | null;
  statementReference?: string | null;
  storeId: StoreWhereUniqueInput;
  transactionDate?: Date | null;
  transactionTypeId: TransactionTypeWhereUniqueInput;
};
