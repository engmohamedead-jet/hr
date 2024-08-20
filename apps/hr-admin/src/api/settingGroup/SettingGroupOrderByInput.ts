import { SortOrder } from "../../util/SortOrder";

export type SettingGroupOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
