import { SortOrder } from "../../util/SortOrder";

export type WorkCenterRoutingOrderByInput = {
  billOfMaterialId?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  sequence?: SortOrder;
  tenantId?: SortOrder;
  timeCycleManual?: SortOrder;
  timeModeBatch?: SortOrder;
  updatedAt?: SortOrder;
  workCenterIdId?: SortOrder;
};
