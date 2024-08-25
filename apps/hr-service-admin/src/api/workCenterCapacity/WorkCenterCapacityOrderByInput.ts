import { SortOrder } from "../../util/SortOrder";

export type WorkCenterCapacityOrderByInput = {
  capacity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  startTime?: SortOrder;
  stopTime?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  workCenterIdId?: SortOrder;
};
