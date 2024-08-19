import { SortOrder } from "../../util/SortOrder";

export type PurchasePriceTypeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  purchaseDetailsId?: SortOrder;
  purchaseReturnDetailsId?: SortOrder;
  purchaseReturnsId?: SortOrder;
  purchasesId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
