import { SortOrder } from "../../util/SortOrder";

export type PaymentVoucherOrderByInput = {
  accountTransactionIdId?: SortOrder;
  amount?: SortOrder;
  cashRepositoryIdId?: SortOrder;
  createdAt?: SortOrder;
  currencyId?: SortOrder;
  employeeIdId?: SortOrder;
  expenseItemIdId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  paymentVoucherDate?: SortOrder;
  statementReference?: SortOrder;
  supplierId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  voucherTypeIdId?: SortOrder;
};
