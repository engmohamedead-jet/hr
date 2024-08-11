import { SortOrder } from "../../util/SortOrder";

export type CustomerUserOrderByInput = {
  accessFailedCount?: SortOrder;
  createdAt?: SortOrder;
  elevatorIdId?: SortOrder;
  email?: SortOrder;
  emailConfirmed?: SortOrder;
  entityVersion?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isExternal?: SortOrder;
  lastPasswordChangeTime?: SortOrder;
  lockoutEnabled?: SortOrder;
  lockoutEnd?: SortOrder;
  name?: SortOrder;
  normalizedEmail?: SortOrder;
  normalizedUserName?: SortOrder;
  note?: SortOrder;
  passwordHash?: SortOrder;
  phoneNumber?: SortOrder;
  phoneNumberConfirmed?: SortOrder;
  securityStamp?: SortOrder;
  shouldChangePasswordOnNextLogin?: SortOrder;
  surname?: SortOrder;
  twoFactorEnabled?: SortOrder;
  updatedAt?: SortOrder;
  userName?: SortOrder;
};
