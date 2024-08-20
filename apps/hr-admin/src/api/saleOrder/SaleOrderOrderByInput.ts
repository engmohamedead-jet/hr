import { SortOrder } from "../../util/SortOrder";

export type SaleOrderOrderByInput = {
  billingAddress?: SortOrder;
  cashRepositoryIdId?: SortOrder;
  createdAt?: SortOrder;
  customerIdId?: SortOrder;
  deliveryDate?: SortOrder;
  discountTotal?: SortOrder;
  expectedDeliveryDate?: SortOrder;
  id?: SortOrder;
  invoiceTypeIdId?: SortOrder;
  isActive?: SortOrder;
  isCancelled?: SortOrder;
  isReplicated?: SortOrder;
  netTotal?: SortOrder;
  nonTaxableTotal?: SortOrder;
  note?: SortOrder;
  Name?: SortOrder;
  paymentStatusId?: SortOrder;
  paymentTypeIdId?: SortOrder;
  referenceNumber?: SortOrder;
  saleOrderDate?: SortOrder;
  Name?: SortOrder;
  salePriceTypeId?: SortOrder;
  saleQuotationId?: SortOrder;
  saleTotal?: SortOrder;
  shippingAddress?: SortOrder;
  shippingCost?: SortOrder;
  shippingStatusId?: SortOrder;
  storeIdId?: SortOrder;
  tax?: SortOrder;
  taxRate?: SortOrder;
  taxableTotal?: SortOrder;
  tenantId?: SortOrder;
  transactionDateTime?: SortOrder;
  updatedAt?: SortOrder;
};
