import { SortOrder } from "../../util/SortOrder";

export type CompanyOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  phoneNumber?: SortOrder;
  saleReceiptExtraDetails?: SortOrder;
  updatedAt?: SortOrder;
};
