import { SortOrder } from "../../util/SortOrder";

export type WorkCenterProductivityLossOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isManual?: SortOrder;
  lossType?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  sequence?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
  workCenterIdId?: SortOrder;
  workCenterProductivityLossTypeIId?: SortOrder;
};
