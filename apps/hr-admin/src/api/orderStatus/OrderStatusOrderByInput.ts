import { SortOrder } from "../../util/SortOrder";

export type OrderStatusOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  productionOrdersId?: SortOrder;
  saleOrdersId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
