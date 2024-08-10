import { SortOrder } from "../../util/SortOrder";

export type OrderStatusOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
