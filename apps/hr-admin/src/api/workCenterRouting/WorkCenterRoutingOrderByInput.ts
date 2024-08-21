import { SortOrder } from "../../util/SortOrder";

export type WorkCenterRoutingOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  sequence?: SortOrder;
  tenantIdId?: SortOrder;
  timeCycleManual?: SortOrder;
  timeModeBatch?: SortOrder;
  updatedAt?: SortOrder;
  workCenterIdId?: SortOrder;
};
