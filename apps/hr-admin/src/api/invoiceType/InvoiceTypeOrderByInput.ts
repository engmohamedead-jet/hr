import { SortOrder } from "../../util/SortOrder";

export type InvoiceTypeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  updatedAt?: SortOrder;
};
