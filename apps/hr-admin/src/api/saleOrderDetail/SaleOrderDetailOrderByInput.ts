import { SortOrder } from "../../util/SortOrder";

export type SaleOrderDetailOrderByInput = {
  barcode?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  discountRate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isError?: SortOrder;
  isTaxed?: SortOrder;
  price?: SortOrder;
  priceTotal?: SortOrder;
  productIdId?: SortOrder;
  productSerialNumber?: SortOrder;
  productVariantIdId?: SortOrder;
  quantity?: SortOrder;
  saleOrderId?: SortOrder;
  salePriceTypeIdId?: SortOrder;
  sequence?: SortOrder;
  tenantId?: SortOrder;
  unitIdId?: SortOrder;
  updatedAt?: SortOrder;
};
