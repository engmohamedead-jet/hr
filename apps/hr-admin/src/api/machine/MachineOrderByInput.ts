import { SortOrder } from "../../util/SortOrder";

export type MachineOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ip?: SortOrder;
  isAndroid?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
