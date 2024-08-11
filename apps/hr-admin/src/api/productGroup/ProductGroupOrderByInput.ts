import { SortOrder } from "../../util/SortOrder";

export type ProductGroupOrderByInput = {
  PurchaseDiscountAccountIdId?: SortOrder;
  SaleReturnAccountId?: SortOrder;
  accountId?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  excludeFromPurchase?: SortOrder;
  excludeFromSale?: SortOrder;
  id?: SortOrder;
  inventoryAccountIdId?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  notes?: SortOrder;
  productGroupsId?: SortOrder;
  purchaseAccountIdId?: SortOrder;
  purchaseReturnAccountIdId?: SortOrder;
  SaleAccountId?: SortOrder;
  SaleDiscountAccountId?: SortOrder;
  saleTaxIdId?: SortOrder;
  updatedAt?: SortOrder;
};
