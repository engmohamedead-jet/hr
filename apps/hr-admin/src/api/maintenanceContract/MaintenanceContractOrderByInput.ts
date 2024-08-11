import { SortOrder } from "../../util/SortOrder";

export type MaintenanceContractOrderByInput = {
  confirmDate?: SortOrder;
  contactEndTime?: SortOrder;
  contactStartTime?: SortOrder;
  contractPeriodIdId?: SortOrder;
  contractStartDate?: SortOrder;
  createdAt?: SortOrder;
  customerIdId?: SortOrder;
  customerUserIdId?: SortOrder;
  elevatorIdId?: SortOrder;
  id?: SortOrder;
  isConfirmed?: SortOrder;
  note?: SortOrder;
  orderDate?: SortOrder;
  storeIdId?: SortOrder;
  updatedAt?: SortOrder;
};
