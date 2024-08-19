import { SortOrder } from "../../util/SortOrder";

export type CashRepositoryOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  parentCashRepositoryIdId?: SortOrder;
  purchasesId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
