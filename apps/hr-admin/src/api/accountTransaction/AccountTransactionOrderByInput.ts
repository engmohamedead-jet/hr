import { SortOrder } from "../../util/SortOrder";

export type AccountTransactionOrderByInput = {
  costCenterId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  referenceNumber?: SortOrder;
  statementReference?: SortOrder;
  storeId?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
