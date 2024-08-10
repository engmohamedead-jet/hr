import { SortOrder } from "../../util/SortOrder";

export type FiscalWeekOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  endsOn?: SortOrder;
  fiscalMonthIdId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  startsFrom?: SortOrder;
  updatedAt?: SortOrder;
};
