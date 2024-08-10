import { SortOrder } from "../../util/SortOrder";

export type CurrencyOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  foreignCurrencyNameId?: SortOrder;
  hundredthName?: SortOrder;
  id?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
