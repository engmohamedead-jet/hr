import { SortOrder } from "../../util/SortOrder";

export type SaleReturnDetailOrderByInput = {
  barcode?: SortOrder;
  createdAt?: SortOrder;
  discount?: SortOrder;
  discountRate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isError?: SortOrder;
  isReplicated?: SortOrder;
  isTaxed?: SortOrder;
  price?: SortOrder;
  priceTotal?: SortOrder;
  productIdId?: SortOrder;
  productSerialNumber?: SortOrder;
  productVariantIdId?: SortOrder;
  quantity?: SortOrder;
  salePriceTypeId?: SortOrder;
  saleReturnIdId?: SortOrder;
  sequence?: SortOrder;
  tenantIdId?: SortOrder;
  unitIdId?: SortOrder;
  updatedAt?: SortOrder;
};
