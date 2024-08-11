import { SortOrder } from "../../util/SortOrder";

export type PeriodOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  installmentSaleFeePostingPeriodId?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  paymentTermsId?: SortOrder;
  updatedAt?: SortOrder;
};
