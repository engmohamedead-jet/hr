import { SortOrder } from "../../util/SortOrder";

export type InstallmentSaleFeeOrderByInput = {
  accountIdId?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isFlatAmount?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  rate?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
