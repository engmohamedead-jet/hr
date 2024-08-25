import { SortOrder } from "../../util/SortOrder";

export type TradingSummaryOrderByInput = {
  createdAt?: SortOrder;
  fiscalWeekId?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  partyId?: SortOrder;
  price?: SortOrder;
  priceTotal?: SortOrder;
  productId?: SortOrder;
  productVariantId?: SortOrder;
  quantity?: SortOrder;
  tenantIdId?: SortOrder;
  transactionDate?: SortOrder;
  transactionTypeId?: SortOrder;
  unitId?: SortOrder;
  updatedAt?: SortOrder;
};
