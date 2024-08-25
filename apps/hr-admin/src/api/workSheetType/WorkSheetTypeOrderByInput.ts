import { SortOrder } from "../../util/SortOrder";

export type WorkSheetTypeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};