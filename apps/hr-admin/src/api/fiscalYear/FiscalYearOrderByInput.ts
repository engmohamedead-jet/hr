import { SortOrder } from "../../util/SortOrder";

export type FiscalYearOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  endsOn?: SortOrder;
  id?: SortOrder;
  isEodRequired?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  notes?: SortOrder;
  startsFrom?: SortOrder;
  updatedAt?: SortOrder;
};
