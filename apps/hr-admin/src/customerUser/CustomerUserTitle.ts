import { CustomerUser as TCustomerUser } from "../api/customerUser/CustomerUser";

export const CUSTOMERUSER_TITLE_FIELD = "name";

export const CustomerUserTitle = (record: TCustomerUser): string => {
  return record.name?.toString() || String(record.id);
};
