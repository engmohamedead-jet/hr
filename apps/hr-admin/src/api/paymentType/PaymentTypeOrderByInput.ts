import { SortOrder } from "../../util/SortOrder";

export type PaymentTypeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
};
