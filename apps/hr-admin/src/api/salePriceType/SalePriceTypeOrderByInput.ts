import { SortOrder } from "../../util/SortOrder";

export type SalePriceTypeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  saleDetailsId?: SortOrder;
  saleQuotationDetailsId?: SortOrder;
  saleReturnDetailsId?: SortOrder;
  saleReturnsId?: SortOrder;
  salesId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
