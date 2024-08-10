import { SortOrder } from "../../util/SortOrder";

export type BankAccountOrderByInput = {
  accountNumber?: SortOrder;
  bankBranchIdId?: SortOrder;
  bankIdId?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  epan?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
