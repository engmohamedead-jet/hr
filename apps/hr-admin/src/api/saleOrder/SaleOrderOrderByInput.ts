import { SortOrder } from "../../util/SortOrder";

export type SaleOrderOrderByInput = {
  createdAt?: SortOrder;
  customerIdId?: SortOrder;
  id?: SortOrder;
  saleOrderDate?: SortOrder;
  saleQuotationId?: SortOrder;
  updatedAt?: SortOrder;
};
