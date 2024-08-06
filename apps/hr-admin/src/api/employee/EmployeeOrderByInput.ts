import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lastYearBalance?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  remainingBalance?: SortOrder;
  updatedAt?: SortOrder;
  usedBalance?: SortOrder;
};
