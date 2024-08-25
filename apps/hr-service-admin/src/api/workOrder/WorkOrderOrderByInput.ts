import { SortOrder } from "../../util/SortOrder";

export type WorkOrderOrderByInput = {
  barcode?: SortOrder;
  code?: SortOrder;
  costsPerHour?: SortOrder;
  createdAt?: SortOrder;
  duaration?: SortOrder;
  duarationExpected?: SortOrder;
  duarationPercent?: SortOrder;
  duarationUnit?: SortOrder;
  dueDate?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  orderQuantity?: SortOrder;
  productionDate?: SortOrder;
  quantityProduced?: SortOrder;
  quantityReportedFromPreviouseWorkOrder?: SortOrder;
  scrapReasonIdId?: SortOrder;
  scrappedQuantity?: SortOrder;
  startDate?: SortOrder;
  stockQuantity?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
