import { SortOrder } from "../../util/SortOrder";

export type TransactionTypeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  updatedAt?: SortOrder;
};
