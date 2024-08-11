import { SortOrder } from "../../util/SortOrder";

export type DebitOrderByInput = {
  amountTotal?: SortOrder;
  contractDate?: SortOrder;
  contractNumber?: SortOrder;
  createdAt?: SortOrder;
  firstShare?: SortOrder;
  fourthShare?: SortOrder;
  id?: SortOrder;
  note?: SortOrder;
  paidTotal?: SortOrder;
  remaining?: SortOrder;
  secondShare?: SortOrder;
  thirdShare?: SortOrder;
  updatedAt?: SortOrder;
};
