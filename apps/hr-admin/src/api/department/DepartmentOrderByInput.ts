import { SortOrder } from "../../util/SortOrder";

export type DepartmentOrderByInput = {
  createdAt?: SortOrder;
  departmentIdId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  noteJson?: SortOrder;
  updatedAt?: SortOrder;
};
