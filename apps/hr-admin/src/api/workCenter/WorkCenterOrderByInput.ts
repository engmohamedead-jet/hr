import { SortOrder } from "../../util/SortOrder";

export type WorkCenterOrderByInput = {
  analyticDistribution?: SortOrder;
  code?: SortOrder;
  color?: SortOrder;
  costPerHour?: SortOrder;
  createdAt?: SortOrder;
  defaultCapacity?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isProductive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  oeeTareget?: SortOrder;
  sequence?: SortOrder;
  startTime?: SortOrder;
  stopTime?: SortOrder;
  timeEfficiency?: SortOrder;
  updatedAt?: SortOrder;
};
