import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountNumber?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isMasterAccount?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  parentAccountIdId?: SortOrder;
  updatedAt?: SortOrder;
};
