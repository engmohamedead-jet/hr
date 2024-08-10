import { SortOrder } from "../../util/SortOrder";

export type PaymentVoucherOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  paymentVoucherDate?: SortOrder;
  statementReference?: SortOrder;
  updatedAt?: SortOrder;
};
