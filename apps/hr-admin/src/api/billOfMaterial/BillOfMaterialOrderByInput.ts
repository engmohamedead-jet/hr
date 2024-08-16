import { SortOrder } from "../../util/SortOrder";

export type BillOfMaterialOrderByInput = {
  billOfMaterialTypeIdId?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  daysToPrepareManufacturingOrder?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  note?: SortOrder;
  productIdId?: SortOrder;
  productVariantIdId?: SortOrder;
  quantity?: SortOrder;
  sequence?: SortOrder;
  startDate?: SortOrder;
  unitIdId?: SortOrder;
  updatedAt?: SortOrder;
};
