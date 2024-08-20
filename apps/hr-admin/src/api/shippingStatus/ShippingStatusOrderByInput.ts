import { SortOrder } from "../../util/SortOrder";

export type ShippingStatusOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  saleOrdersId?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
