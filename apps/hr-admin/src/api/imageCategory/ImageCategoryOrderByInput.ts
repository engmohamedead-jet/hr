import { SortOrder } from "../../util/SortOrder";

export type ImageCategoryOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
};
