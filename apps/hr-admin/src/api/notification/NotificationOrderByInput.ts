import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  eventDateTime?: SortOrder;
  icon?: SortOrder;
  id?: SortOrder;
  isSystem?: SortOrder;
  note?: SortOrder;
  notificationText?: SortOrder;
  officeIdId?: SortOrder;
  storeId?: SortOrder;
  toLoginId?: SortOrder;
  toRoleId?: SortOrder;
  toUserId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
