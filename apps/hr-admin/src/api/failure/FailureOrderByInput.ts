import { SortOrder } from "../../util/SortOrder";

export type FailureOrderByInput = {
  createdAt?: SortOrder;
  failureDate?: SortOrder;
  failureReport?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  serial?: SortOrder;
  updatedAt?: SortOrder;
};
