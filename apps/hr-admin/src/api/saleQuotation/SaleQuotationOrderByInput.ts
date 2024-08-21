import { SortOrder } from "../../util/SortOrder";

export type SaleQuotationOrderByInput = {
  createdAt?: SortOrder;
  discount?: SortOrder;
  discountRate?: SortOrder;
  expectedDeliveryDate?: SortOrder;
  id?: SortOrder;
  internalMemo?: SortOrder;
  isActive?: SortOrder;
  isCancelled?: SortOrder;
  nonTaxableTotal?: SortOrder;
  note?: SortOrder;
  referenceNumber?: SortOrder;
  saleQuotationDate?: SortOrder;
  sequenceNumber?: SortOrder;
  taxRate?: SortOrder;
  taxTotal?: SortOrder;
  taxableTotal?: SortOrder;
  tenantIdId?: SortOrder;
  terms?: SortOrder;
  transactionDateTime?: SortOrder;
  updatedAt?: SortOrder;
};
