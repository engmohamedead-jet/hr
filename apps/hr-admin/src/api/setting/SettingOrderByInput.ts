import { SortOrder } from "../../util/SortOrder";

export type SettingOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isEnabled?: SortOrder;
  isSystem?: SortOrder;
  key?: SortOrder;
  note?: SortOrder;
  settingGroupId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
