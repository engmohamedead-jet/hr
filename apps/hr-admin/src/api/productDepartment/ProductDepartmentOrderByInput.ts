import { SortOrder } from "../../util/SortOrder";

export type ProductDepartmentOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  parentProductDepartmentIdId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
