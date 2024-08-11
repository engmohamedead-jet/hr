import { SortOrder } from "../../util/SortOrder";

export type CashTransferOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  referenceNumber?: SortOrder;
  statementReference?: SortOrder;
  transferDate?: SortOrder;
  updatedAt?: SortOrder;
};
