import { TransactionType as TTransactionType } from "../api/transactionType/TransactionType";

export const TRANSACTIONTYPE_TITLE_FIELD = "name";

export const TransactionTypeTitle = (record: TTransactionType): string => {
  return record.name?.toString() || String(record.id);
};
