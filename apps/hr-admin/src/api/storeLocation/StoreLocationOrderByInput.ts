import { SortOrder } from "../../util/SortOrder";

export type StoreLocationOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  createdAtSide?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  storeIdId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
