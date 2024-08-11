import { SortOrder } from "../../util/SortOrder";

export type UnitOrderByInput = {
  code?: SortOrder;
  compareUnitId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isCompound?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
