import { SortOrder } from "../../util/SortOrder";

export type CalendarOrderByInput = {
  averageHoursPerDay?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isTwoWeeksCalendar?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
