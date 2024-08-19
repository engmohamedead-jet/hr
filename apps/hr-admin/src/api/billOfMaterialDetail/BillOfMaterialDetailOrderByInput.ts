import { SortOrder } from "../../util/SortOrder";

export type BillOfMaterialDetailOrderByInput = {
  billOfMaterialId?: SortOrder;
  costShare?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isManualConsumption?: SortOrder;
  note?: SortOrder;
  productIdId?: SortOrder;
  productVariantIdId?: SortOrder;
  quantity?: SortOrder;
  sequence?: SortOrder;
  tenantId?: SortOrder;
  unitIdId?: SortOrder;
  updatedAt?: SortOrder;
  workCenterRoutingIdId?: SortOrder;
};
