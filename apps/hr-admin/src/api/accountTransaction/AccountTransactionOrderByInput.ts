import { SortOrder } from "../../util/SortOrder";

export type AccountTransactionOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  receiptVouchersId?: SortOrder;
  updatedAt?: SortOrder;
};
