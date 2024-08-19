import { SortOrder } from "../../util/SortOrder";

export type SaleQuotationDetailOrderByInput = {
  createdAt?: SortOrder;
  discount?: SortOrder;
  discountRate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isError?: SortOrder;
  isReplicated?: SortOrder;
  isTaxed?: SortOrder;
  note?: SortOrder;
  price?: SortOrder;
  priceTotal?: SortOrder;
  productIdId?: SortOrder;
  productVariantIdId?: SortOrder;
  quantity?: SortOrder;
  Name?: SortOrder;
  saleQuotationIdId?: SortOrder;
  sequence?: SortOrder;
  shippingCharge?: SortOrder;
  tenantIdId?: SortOrder;
  unitIdId?: SortOrder;
  updatedAt?: SortOrder;
};
