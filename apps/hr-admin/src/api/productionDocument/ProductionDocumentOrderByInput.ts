import { SortOrder } from "../../util/SortOrder";

export type ProductionDocumentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  priority?: SortOrder;
  updatedAt?: SortOrder;
};
