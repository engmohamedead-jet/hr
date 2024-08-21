import { SortOrder } from "../../util/SortOrder";

export type ReceiptVoucherOrderByInput = {
  accountTransactionIdId?: SortOrder;
  amount?: SortOrder;
  cashRepositoryIdId?: SortOrder;
  chequeDueDate?: SortOrder;
  chequeNumber?: SortOrder;
  chequeValue?: SortOrder;
  createdAt?: SortOrder;
  currencyIdId?: SortOrder;
  customerIdId?: SortOrder;
  employeeIdId?: SortOrder;
  id?: SortOrder;
  isAcive?: SortOrder;
  note?: SortOrder;
  receiptVoucherDate?: SortOrder;
  sequence?: SortOrder;
  statementReference?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
  voucherTypeIdId?: SortOrder;
  wasChequePaid?: SortOrder;
};
