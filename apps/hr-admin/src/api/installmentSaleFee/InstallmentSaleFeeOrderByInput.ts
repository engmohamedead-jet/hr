import { SortOrder } from "../../util/SortOrder";

export type InstallmentSaleFeeOrderByInput = {
  accountId?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isFlatAmount?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  rate?: SortOrder;
  updatedAt?: SortOrder;
};
