import { SortOrder } from "../../util/SortOrder";

export type ProductCategoryOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
