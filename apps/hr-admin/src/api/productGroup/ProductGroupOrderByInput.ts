import { SortOrder } from "../../util/SortOrder";

export type ProductGroupOrderByInput = {
  code?: SortOrder;
  costOfGoodsSoldAccountId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  excludeFromPurchase?: SortOrder;
  excludeFromSale?: SortOrder;
  id?: SortOrder;
  inventoryAccountId?: SortOrder;
  isActive?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  parentProductGroupIdId?: SortOrder;
  purchaseAccountIdId?: SortOrder;
  purchaseDiscountAccountIdId?: SortOrder;
  purchaseReturnAccountIdId?: SortOrder;
  saleAccountIdId?: SortOrder;
  saleDiscountAccountIdId?: SortOrder;
  saleReturnAccountIdId?: SortOrder;
  saleTaxIdId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
