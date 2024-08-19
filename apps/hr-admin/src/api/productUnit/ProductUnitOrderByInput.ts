import { SortOrder } from "../../util/SortOrder";

export type ProductUnitOrderByInput = {
  barcode?: SortOrder;
  CompareUnitId?: SortOrder;
  compareUnitQuantity?: SortOrder;
  costPrice?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isCostPriceIncludingTax?: SortOrder;
  isDefaultForPurchase?: SortOrder;
  isDefaultForSale?: SortOrder;
  isSalePriceIncludingTax?: SortOrder;
  note?: SortOrder;
  productIdId?: SortOrder;
  quantity?: SortOrder;
  salePrice?: SortOrder;
  tenantIdId?: SortOrder;
  unitIdId?: SortOrder;
  updatedAt?: SortOrder;
};
