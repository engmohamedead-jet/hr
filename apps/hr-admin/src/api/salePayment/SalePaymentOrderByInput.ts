import { SortOrder } from "../../util/SortOrder";

export type SalePaymentOrderByInput = {
  LocalCurrencyRatl?: SortOrder;
  bankId?: SortOrder;
  bankBrach?: SortOrder;
  bankBranchId?: SortOrder;
  chequeNumber?: SortOrder;
  createdAt?: SortOrder;
  creditCardNumber?: SortOrder;
  currencyIdId?: SortOrder;
  foreignCurrencyRate?: SortOrder;
  id?: SortOrder;
  isCheque?: SortOrder;
  note?: SortOrder;
  paidValue?: SortOrder;
  paymentDate?: SortOrder;
  paymentMethodIdId?: SortOrder;
  quantity?: SortOrder;
  saleIdId?: SortOrder;
  seqeunce?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
