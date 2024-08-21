import { SortOrder } from "../../util/SortOrder";

export type BankOrderByInput = {
  address?: SortOrder;
  bankTypeId?: SortOrder;
  cellPhoneNumber?: SortOrder;
  code?: SortOrder;
  contactPhoneNumber?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  fax?: SortOrder;
  homePhoneNumber?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  normalizedName?: SortOrder;
  relationshipOfficerContactNumber?: SortOrder;
  relationshipOfficerName?: SortOrder;
  street?: SortOrder;
  updatedAt?: SortOrder;
};
