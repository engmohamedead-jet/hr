import { SortOrder } from "../../util/SortOrder";

export type PaymentTermOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDays?: SortOrder;
  duePeriodIdId?: SortOrder;
  gracePeriod?: SortOrder;
  id?: SortOrder;
  installmentSaleFeeIdId?: SortOrder;
  installmentSaleFeePostingPeriodId?: SortOrder;
  isActive?: SortOrder;
  isDefault?: SortOrder;
  isDueOnDate?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
