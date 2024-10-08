import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  cashRepositoryIdId?: SortOrder;
  createdAt?: SortOrder;
  discountTotal?: SortOrder;
  id?: SortOrder;
  invoiceTypeIdId?: SortOrder;
  isActive?: SortOrder;
  isCancelled?: SortOrder;
  isReplicated?: SortOrder;
  netTotal?: SortOrder;
  nonTaxableTotal?: SortOrder;
  note?: SortOrder;
  paid?: SortOrder;
  paymentTermIdId?: SortOrder;
  paymentTypeIdId?: SortOrder;
  purchaseDate?: SortOrder;
  Name?: SortOrder;
  purchaseTotal?: SortOrder;
  referenceNumber?: SortOrder;
  remaining?: SortOrder;
  sequenceNumber?: SortOrder;
  storeIdId?: SortOrder;
  supplierIdId?: SortOrder;
  tax?: SortOrder;
  taxRate?: SortOrder;
  taxableTotal?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
