import { SortOrder } from "../../util/SortOrder";

export type UnitOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isCompound?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  productUnitCompareUnitsId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
