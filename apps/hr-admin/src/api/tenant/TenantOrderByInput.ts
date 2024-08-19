import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  creatorUserId?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  lastModifierUserIdl?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  tenancyName?: SortOrder;
  updatedAt?: SortOrder;
};
