import { SortOrder } from "../../util/SortOrder";

export type ProductDepartmentOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  parentProductDepartmentId?: SortOrder;
  updatedAt?: SortOrder;
};
