import { SortOrder } from "../../util/SortOrder";

export type MaintenanceVisitOrderByInput = {
  createdAt?: SortOrder;
  elevatorId?: SortOrder;
  elevatorStatusId?: SortOrder;
  id?: SortOrder;
  spareParts?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
  visitDate?: SortOrder;
  visitDocumentImage?: SortOrder;
};
