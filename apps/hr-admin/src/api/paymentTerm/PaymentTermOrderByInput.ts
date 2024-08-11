import { SortOrder } from "../../util/SortOrder";

export type PaymentTermOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  dueDays?: SortOrder;
  dueOnDate?: SortOrder;
  Name?: SortOrder;
  gracePeriod?: SortOrder;
  id?: SortOrder;
  installmentSaleFeeIdId?: SortOrder;
  InstallmentSaleFeePostingPeriod?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  updatedAt?: SortOrder;
};
