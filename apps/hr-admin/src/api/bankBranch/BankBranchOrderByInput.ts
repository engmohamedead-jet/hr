import { SortOrder } from "../../util/SortOrder";

export type BankBranchOrderByInput = {
  address?: SortOrder;
  bankId?: SortOrder;
  code?: SortOrder;
  contactPhoneNumber?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
