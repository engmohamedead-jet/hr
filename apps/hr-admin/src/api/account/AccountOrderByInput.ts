import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  accountCategoryId?: SortOrder;
  accountNumber?: SortOrder;
  accountTypeIdId?: SortOrder;
  createdAt?: SortOrder;
  currencyIdId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isMasterAccount?: SortOrder;
  isUnderRevision?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  parentAccountId?: SortOrder;
  referenceNumber?: SortOrder;
  updatedAt?: SortOrder;
};
