import { SortOrder } from "../../util/SortOrder";

export type ReceiptVoucherOrderByInput = {
  amount?: SortOrder;
  chequeDueDate?: SortOrder;
  chequeNumber?: SortOrder;
  chequeValue?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  receiptVoucherDate?: SortOrder;
  serialNumber?: SortOrder;
  statementReference?: SortOrder;
  updatedAt?: SortOrder;
  voucherTypeIdId?: SortOrder;
  wasChequePaid?: SortOrder;
};
