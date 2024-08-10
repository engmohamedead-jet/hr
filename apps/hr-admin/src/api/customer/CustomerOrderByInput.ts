import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  code?: SortOrder;
  createdAt?: SortOrder;
  credit?: SortOrder;
  currencyIdId?: SortOrder;
  customerCateogryIdId?: SortOrder;
  customerTypeIdId?: SortOrder;
  debit?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  firstBalance?: SortOrder;
  firstBalanceDate?: SortOrder;
  guarantorAddress?: SortOrder;
  guarantorJobTitle?: SortOrder;
  guarantorName?: SortOrder;
  guarantorNationalIdNumber?: SortOrder;
  guarantorPhoneNumber?: SortOrder;
  Name?: SortOrder;
  guarantorWorkAddress?: SortOrder;
  hasMortalOrDiscount?: SortOrder;
  hasNoPendingInvoices?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isComplain?: SortOrder;
  isSystem?: SortOrder;
  isUnderRevision?: SortOrder;
  jobTitle?: SortOrder;
  maxAllowedDebit?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  note?: SortOrder;
  phoneNumber?: SortOrder;
  previousBalance?: SortOrder;
  ratingId?: SortOrder;
  revisionDate?: SortOrder;
  saleDiscountRate?: SortOrder;
  Name?: SortOrder;
  supplierIdId?: SortOrder;
  taxNumber?: SortOrder;
  updatedAt?: SortOrder;
  website?: SortOrder;
  workAddress?: SortOrder;
};
