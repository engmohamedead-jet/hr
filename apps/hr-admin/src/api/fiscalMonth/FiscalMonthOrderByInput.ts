import { SortOrder } from "../../util/SortOrder";

export type FiscalMonthOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  endsOn?: SortOrder;
  fiscalYearId?: SortOrder;
  id?: SortOrder;
  mormalizedName?: SortOrder;
  name?: SortOrder;
  note?: SortOrder;
  startsFrom?: SortOrder;
  updatedAt?: SortOrder;
};
