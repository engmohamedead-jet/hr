import { SortOrder } from "../../util/SortOrder";

export type PurchaseReturnDetailOrderByInput = {
  barcode?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  discountRate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isError?: SortOrder;
  isReplicated?: SortOrder;
  note?: SortOrder;
  price?: SortOrder;
  priceTotal?: SortOrder;
  productIdId?: SortOrder;
  productSerialNumber?: SortOrder;
  productVariantIdId?: SortOrder;
  purchasePriceTypeIdId?: SortOrder;
  purchaseReturnIdId?: SortOrder;
  quantity?: SortOrder;
  sequence?: SortOrder;
  tenantIdId?: SortOrder;
  unitIdId?: SortOrder;
  updatedAt?: SortOrder;
};
