import { SortOrder } from "../../util/SortOrder";

export type FailureReportingOrderByInput = {
  contactingFromTime?: SortOrder;
  contactingToTime?: SortOrder;
  createdAt?: SortOrder;
  customerElevatorIdId?: SortOrder;
  customerUserId?: SortOrder;
  elevatorId?: SortOrder;
  failureDescription?: SortOrder;
  failureTypeIdId?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  reportingDate?: SortOrder;
  reviewDate?: SortOrder;
  storeId?: SortOrder;
  updatedAt?: SortOrder;
  wasReviewed?: SortOrder;
};
