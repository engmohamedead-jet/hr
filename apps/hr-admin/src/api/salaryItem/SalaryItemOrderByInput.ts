import { SortOrder } from "../../util/SortOrder";

export type SalaryItemOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  salaryItemGroupIdId?: SortOrder;
  salaryItemTypeIdId?: SortOrder;
  salaryLawIdId?: SortOrder;
  tenantIdId?: SortOrder;
  updatedAt?: SortOrder;
};
