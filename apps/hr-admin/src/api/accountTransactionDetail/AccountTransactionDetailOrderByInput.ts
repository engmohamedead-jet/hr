import { SortOrder } from "../../util/SortOrder";

export type AccountTransactionDetailOrderByInput = {
  accountTransactionIdId?: SortOrder;
  createdAt?: SortOrder;
  credit?: SortOrder;
  debit?: SortOrder;
  exchangeRate?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  referenceNumber?: SortOrder;
  serial?: SortOrder;
  statementReference?: SortOrder;
  storeIdId?: SortOrder;
  transactionDate?: SortOrder;
  transactionTypeIdId?: SortOrder;
  updatedAt?: SortOrder;
};
