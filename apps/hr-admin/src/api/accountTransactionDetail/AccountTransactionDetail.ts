import { AccountTransaction } from "../accountTransaction/AccountTransaction";
import { Decimal } from "decimal.js";
import { Store } from "../store/Store";
import { TransactionType } from "../transactionType/TransactionType";

export type AccountTransactionDetail = {
  accountTransactionId?: AccountTransaction;
  createdAt: Date;
  credit: Decimal;
  debit: Decimal;
  exchangeRate: Decimal | null;
  id: string;
  note: string | null;
  referenceNumber: string | null;
  serial: number | null;
  statementReference: string | null;
  storeId?: Store;
  transactionDate: Date | null;
  transactionTypeId?: TransactionType;
  updatedAt: Date;
};
