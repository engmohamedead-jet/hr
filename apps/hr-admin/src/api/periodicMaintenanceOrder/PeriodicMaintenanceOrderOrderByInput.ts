import { SortOrder } from "../../util/SortOrder";

export type PeriodicMaintenanceOrderOrderByInput = {
  confirmDate?: SortOrder;
  contractEndDate?: SortOrder;
  contractStartDate?: SortOrder;
  createdAt?: SortOrder;
  customerElevatorId?: SortOrder;
  customerUserIdId?: SortOrder;
  elevatorIdId?: SortOrder;
  id?: SortOrder;
  isConfirmed?: SortOrder;
  orderDate?: SortOrder;
  storeIdId?: SortOrder;
  updatedAt?: SortOrder;
};
