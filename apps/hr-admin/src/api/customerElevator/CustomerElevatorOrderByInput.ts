import { SortOrder } from "../../util/SortOrder";

export type CustomerElevatorOrderByInput = {
  address?: SortOrder;
  amount?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  elevatorIdId?: SortOrder;
  hasPendingMaintenanceContractOrders?: SortOrder;
  id?: SortOrder;
  maintenanceContractDocumentImage?: SortOrder;
  maintenanceEndDate?: SortOrder;
  maintenanceStartDate?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  phoneNumber?: SortOrder;
  storeIdId?: SortOrder;
  updatedAt?: SortOrder;
};
